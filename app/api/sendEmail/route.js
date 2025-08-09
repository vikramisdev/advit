import { Resend } from "resend";
import fs from "fs";

export async function POST(req) {
    try {
        const formData = await req.formData();
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const message = formData.get("message");
        const file = formData.get("file"); // This is a File object

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

        console.log("file content::", file);
        const arrayBuffer = await file.arrayBuffer();
        const base64Content = Buffer.from(arrayBuffer).toString("base64");

        // Sending Email
        await resend.emails.send({
            from: "onboarding@resend.dev", // Use Resend's default email or your verified domain
            to: email || "your-default-email@example.com", // Replace with your actual email if missing
            subject: "New Quote Request",
            text: emailContent.trim(),
            attachments: [
                {
                    filename: "report.pdf",
                    content: base64Content,
                }
            ]
        });

        return Response.json({ message: "Email sent successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Resend Error:", error);
        return Response.json({ message: "Failed to send email" }, { status: 500 });
    }
}
