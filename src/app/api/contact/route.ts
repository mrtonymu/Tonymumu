import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, project, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Format the message for WhatsApp
    const whatsappMessage = `Hi Tony! I'm interested in your services.

Name: ${name}
Email: ${email}
Project Type: ${project || 'Not specified'}
Budget Range: ${budget || 'Not specified'}

Message:
${message}

Please get back to me soon!`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/60123456789?text=${encodedMessage}`;

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send to CRM system
    // 4. Send WhatsApp message programmatically

    // For now, we'll return the WhatsApp URL
    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully!',
      whatsappUrl: whatsappUrl
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
