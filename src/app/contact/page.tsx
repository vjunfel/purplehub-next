'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { LoaderCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ContactInfo from '@/components/ContactInfo';

const ContactPage: React.FC = () => {
	const [name, setName] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [sending, setSending] = useState<boolean>(false);

	const sendEmail = async (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (!email || !message || !name || !phone) {
			alert('Please fill in all fields');
			return;
		}
		
		const templateParams = {
			from_name: email,
			to_name: "Purplehub",
			phone,
			message,
		};

		setSending(true);
			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
				templateParams,
				process.env.NEXT_PUBLIC_EMAILJS_USER_ID
			)
			.then(() => {
				toast.success('Message sent', {
					position: 'top-center',
					autoClose: 3000,
					draggable: true,
				});
				console.log('Email sent successfully.')
			})
			.catch(() => {
				toast.error('Sending failed', {
					position: 'top-center',
					autoClose: 3000,
					draggable: true,
				});
			})

		setName('');
		setPhone('');
		setEmail('');
		setMessage('');
		setSending(false);
	};

	return (
		<div className="bg-gradient-to-r from-purple-500 from-10% via-purple-700 via-50% to-purple-950 text-white p-4 lg:p-0">
			<div className="pt-[80px] lg:pt-[160px] w-full max-w-screen-xl mx-auto min-h-screen flex justify-center items-center flex-col ">
				<h2 className="my-10 text-5xl ">Our Contact</h2>

				<div className=" flex flex-col md:flex-row gap-16 w-full md:min-h-screen py-10 lg:pb-32 md:px-16 rounded-3xl items-start justify-center">
					<form
						className="max-w-screen-sm bg-purple-300 text-gray-700 rounded-lg flex flex-1 flex-col w-full gap-6 p-8"
						name="contact-form"
						id="contact-form"
						autoComplete="off"
						style={{ '--ring': '255 89% 74%' } as React.CSSProperties}
					>
						<div className="space-y-2">
							<Label htmlFor="name">
								Name
								<span className="text-destructive">*</span>
							</Label>
							<Input
								id="name"
								placeholder="Your name"
								type="name"
								required
								name="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="phone">
								Phone
								<span className="text-destructive">*</span>
							</Label>
							<Input
								id="phone"
								placeholder="0900-000-000"
								type="phone"
								required
								name="phone"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="email">
								Email
								<span className="text-destructive">*</span>
							</Label>
							<Input
								id="email"
								placeholder="your@email.com"
								type="email"
								required
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div className="space-y-2 flex flex-col">
							<Label htmlFor="message">
								Message details
								<span className="text-destructive">*</span>
							</Label>
							<textarea
								name="message"
								placeholder="Please provide message details"
								required
								rows={5}
								id="message"
								autoComplete="off"
								className="rounded-sm p-2"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
						</div>

						{sending ? (
							<Button
								disabled
								type="submit"
							>
								<LoaderCircle
									className="-ms-1 me-2 animate-spin"
									size={16}
									strokeWidth={2}
									aria-hidden="true"
								/>
								Sending...
							</Button>
						) : (
							<Button
								type="submit"
								className="bg-purple-800 hover:bg-purple-900"
								onClick={sendEmail}
							>
								Send
							</Button>
						)}
					</form>
					
					{/* <ContactInfo /> */}
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
