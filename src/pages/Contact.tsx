import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  Handshake,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [intent, setIntent] = useState<"schedule_call" | "request_trial" | "">("");
  const [slotDate, setSlotDate] = useState("");
  const [slotTime, setSlotTime] = useState("");
  const [trialDate, setTrialDate] = useState("");
  const [trialTime, setTrialTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const baseMessageFor = (i: "schedule_call" | "request_trial") =>
    i === "schedule_call"
      ? "I would like to schedule a call to discuss my requirements."
      : "I would like to request a product trial.";

  const withWhenSuffix = (msg: string, date?: string, time?: string) => {
    const parts: string[] = [];
    if (date) parts.push(date);
    if (time) parts.push(`at ${time}`);
    if (parts.length === 0) return msg;
    return `${msg} Preferred schedule: ${parts.join(" ")}.`;
  };

  const presetMessage = (nextIntent: "schedule_call" | "request_trial" | "") => {
    if (formData.message.trim().length > 0) return;

    if (nextIntent === "schedule_call") {
      const auto = withWhenSuffix(
        baseMessageFor("schedule_call"),
        slotDate || undefined,
        slotTime || undefined
      );
      setFormData((p) => ({ ...p, message: auto }));
    } else if (nextIntent === "request_trial") {
      const auto = withWhenSuffix(
        baseMessageFor("request_trial"),
        trialDate || undefined,
        trialTime || undefined
      );
      setFormData((p) => ({ ...p, message: auto }));
    } else {
      setFormData((p) => ({ ...p, message: "" }));
    }
  };

  const updateMessageForWhenChange = () => {
    if (!intent) return;

    const base = baseMessageFor(intent);
    const nextMsg =
      intent === "schedule_call"
        ? withWhenSuffix(base, slotDate || undefined, slotTime || undefined)
        : withWhenSuffix(base, trialDate || undefined, trialTime || undefined);

    setFormData((p) => {
      const current = p.message.trim();
      if (
        current.length === 0 ||
        current === base ||
        current.startsWith(base + " Preferred schedule:")
      ) {
        return { ...p, message: nextMsg };
      }
      return p;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (intent === "request_trial") {
      toast({
        title: "Message Sent!",
        description:
          "Your team will call you once again for confirmation for trial.",
      });
    } else if (intent === "schedule_call") {
      toast({
        title: "Message Sent!",
        description: "Our team will contact you soon for request call.",
      });
    } else {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
    }

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIntent("");
    setSlotDate("");
    setSlotTime("");
    setTrialDate("");
    setTrialTime("");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-gradient-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Contact Us
            </h1>
            <p className="text-center text-lg text-primary-foreground/90 max-w-3xl mx-auto">
              Get in touch with our team for quotes, product trials, or any
              inquiries
            </p>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* LEFT SIDE */}
              <div className="space-y-8">
                {/* PHONE */}
                <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="pt-6">
                    <a
                      href="tel:+919876543210"
                      className="flex items-start space-x-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2 text-lg">
                          Phone
                        </h3>
                        <p className="text-sm text-primary hover:underline font-medium">
                          +91 7276605175{" "}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Mon-Sat: 9AM - 6PM
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                {/* EMAIL */}
                <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2 text-lg">
                          Email
                        </h3>
                        <a
                          href="mailto:info@percitechsales.com"
                          className="text-sm text-primary hover:underline font-medium block"
                        >
                          info@percitechsales.com
                        </a>
                        <a
                          href="mailto:sales@percitechsales.com"
                          className="text-sm text-primary hover:underline font-medium block"
                        >
                          sales@percitechsales.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* ADDRESS */}
                <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="pt-6">
                    <a
                      href="https://www.google.com/maps/search/Industrial+Area+Business+District"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                        <MapPin className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2 text-lg">
                          Address
                        </h3>
                        <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                          Industrial Area
                        </p>
                        <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                          Business District
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                {/* SOCIAL */}
                <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                        <Handshake className="w-8 h-8 text-primary-foreground" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2 text-lg">
                          Follow Us
                        </h3>

                        <div className="mt-2 flex items-center gap-5">
                          {/* Instagram */}
                          <a
                            href="#"
                            className="group inline-flex items-center justify-center h-14 w-14 rounded-2xl 
                            text-pink-600 bg-gradient-to-br from-white/70 to-white/40 shadow-lg shadow-pink-300/40 
                            transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-pink-500/40 
                            backdrop-blur-sm border border-white/30"
                          >
                            <Instagram className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
                          </a>

                          {/* Facebook */}
                          <a
                            href="#"
                            className="group inline-flex items-center justify-center h-14 w-14 rounded-2xl 
                            text-blue-600 bg-gradient-to-br from-white/70 to-white/40 shadow-lg shadow-blue-300/40 
                            transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-blue-500/40 
                            backdrop-blur-sm border border-white/30"
                          >
                            <Facebook className="h-6 w-6 transition-transform duration-300 group-hover:-rotate-6" />
                          </a>

                          {/* LinkedIn */}
                          <a
                            href="#"
                            className="group inline-flex items-center justify-center h-14 w-14 rounded-2xl 
                            text-sky-700 bg-gradient-to-br from-white/70 to-white/40 shadow-lg shadow-sky-300/40 
                            transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-sky-600/40 
                            backdrop-blur-sm border border-white/30"
                          >
                            <Linkedin className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" />
                          </a>

                          {/* WhatsApp */}
                          <a
                            href="#"
                            className="group inline-flex items-center justify-center h-14 w-14 rounded-2xl 
                            text-green-600 bg-gradient-to-br from-white/70 to-white/40 shadow-lg shadow-green-300/40 
                            transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-green-500/40 
                            backdrop-blur-sm border border-white/30"
                          >
                            <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:-rotate-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* RIGHT SIDE FORM */}
              <div>
                <Card className="border-border shadow-xl w-full">
                  <CardContent className="pt-8 pb-8 px-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-foreground mb-3">
                        Send Us a Message
                      </h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and we'll get back to you within
                        24 hours
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-semibold text-foreground flex items-center gap-2"
                          >
                            Full Name{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Jeevan Patil"
                            className="h-11 border-2 focus:border-primary transition-colors"
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-semibold text-foreground flex items-center gap-2"
                          >
                            Email Address{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="jeevan@example.com"
                            className="h-11 border-2 focus:border-primary transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-semibold text-foreground"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXXXXXXX"
                          className="h-11 border-2 focus:border-primary transition-colors"
                        />
                      </div>

                      {/* BEAUTIFIED DROPDOWN */}
                      <div className="space-y-2">
                        <label
                          htmlFor="intent"
                          className="text-sm font-semibold text-foreground"
                        >
                          What would you like to do?
                        </label>

                        <div className="relative">
                          <select
                            id="intent"
                            value={intent}
                            onChange={(e) => {
                              const next = e.target
                                .value as "schedule_call" | "request_trial" | "";
                              setIntent(next);
                              setSlotDate("");
                              setSlotTime("");
                              setTrialDate("");
                              setTrialTime("");
                              presetMessage(next);
                            }}
                            className="
                              h-11 w-full
                              border-2 border-input
                              bg-background
                              px-3 pr-10
                              rounded-md
                              text-foreground
                              focus:border-primary
                              focus:ring-2 focus:ring-primary/20
                              transition-all
                              duration-200
                              outline-none
                              appearance-none
                              cursor-pointer
                            "
                            required
                          >
                            <option value="">Select an option</option>
                            <option value="schedule_call">Schedule a call</option>
                            <option value="request_trial">Request trial</option>
                          </select>

                          {/* Dropdown arrow */}
                          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            ▼
                          </div>
                        </div>
                      </div>

                      {intent === "schedule_call" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label
                              htmlFor="slotDate"
                              className="text-sm font-semibold text-foreground"
                            >
                              Preferred date
                            </label>
                            <Input
                              id="slotDate"
                              type="date"
                              value={slotDate}
                              onChange={(e) => {
                                setSlotDate(e.target.value);
                                updateMessageForWhenChange();
                              }}
                              required
                              className="h-11 border-2 focus:border-primary transition-colors"
                            />
                          </div>

                          <div className="space-y-2">
                            <label
                              htmlFor="slotTime"
                              className="text-sm font-semibold text-foreground"
                            >
                              Preferred time
                            </label>
                            <Input
                              id="slotTime"
                              type="time"
                              value={slotTime}
                              onChange={(e) => {
                                setSlotTime(e.target.value);
                                updateMessageForWhenChange();
                              }}
                              required
                              className="h-11 border-2 focus:border-primary transition-colors"
                            />
                          </div>
                        </div>
                      )}

                      {intent === "request_trial" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label
                              htmlFor="trialDate"
                              className="text-sm font-semibold text-foreground"
                            >
                              Preferred date
                            </label>
                            <Input
                              id="trialDate"
                              type="date"
                              value={trialDate}
                              onChange={(e) => {
                                setTrialDate(e.target.value);
                                updateMessageForWhenChange();
                              }}
                              required
                              className="h-11 border-2 focus:border-primary transition-colors"
                            />
                          </div>

                          <div className="space-y-2">
                            <label
                              htmlFor="trialTime"
                              className="text-sm font-semibold text-foreground"
                            >
                              Preferred time
                            </label>
                            <Input
                              id="trialTime"
                              type="time"
                              value={trialTime}
                              onChange={(e) => {
                                setTrialTime(e.target.value);
                                updateMessageForWhenChange();
                              }}
                              required
                              className="h-11 border-2 focus:border-primary transition-colors"
                            />
                          </div>
                        </div>
                      )}

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-semibold text-foreground flex items-center gap-2"
                        >
                          Message{" "}
                          <span className="text-destructive">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us about your requirements..."
                          rows={6}
                          className="border-2 focus:border-primary transition-colors resize-none"
                        />
                        {!!intent && (
                          <p className="text-xs text-muted-foreground">
                            Tip: Date and time are auto-added to the message only
                            if it’s still empty.
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 bg-gradient-primary hover:opacity-90 text-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
                      >
                        Submit Inquiry
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
