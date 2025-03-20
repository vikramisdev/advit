import { Resend } from "resend";

export async function POST(req) {
    try {
        const { name, email, phone, message } = await req.json();
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Construct email content dynamically
        let emailContent = "";
        if (name) emailContent += `Name: ${name}\n`;
        if (email) emailContent += `Email: ${email}\n`;
        if (phone) emailContent += `Phone: ${phone}\n`;
        if (message) emailContent += `Message: ${message}\n`;

        // Ensure there is content to send
        if (!emailContent.trim()) {
            return Response.json({ message: "No valid data provided" }, { status: 400 });
        }

        // Sending Email
        await resend.emails.send({
            from: "onboarding@resend.dev", // Use Resend's default email or your verified domain
            to: email || "your-default-email@example.com", // Replace with your actual email if missing
            subject: "New Quote Request",
            text: emailContent.trim(),
        });

        return Response.json({ message: "Email sent successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Resend Error:", error);
        return Response.json({ message: "Failed to send email" }, { status: 500 });
    }
}
