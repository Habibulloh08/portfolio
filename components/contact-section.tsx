"use client"

import { Phone, Mail, MessageCircle, MapPin, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+998 91-345-72-45",
      href: "tel:+998913457245",
      color: "text-green-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "karimovhabibulloh147@gmail.com",
      href: "mailto:karimovhabibulloh147@gmail.com",
      color: "text-blue-500",
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      value: "@habibulloh90",
      href: "https://t.me/habibulloh90",
      color: "text-cyan-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tashkent, Uzbekistan",
      href: "#",
      color: "text-purple-500",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Habibulloh08",
      color: "text-gray-600 dark:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/habibulloh-karimov-5b87a2293/",
      color: "text-blue-600",
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      href: "https://t.me/habibulloh90",
      color: "text-cyan-500",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let&#39;s discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="flex items-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border card-hover"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div className={`p-3 rounded-lg bg-secondary mr-4`}>
                        <Icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">{item.label}</p>
                        {item.href === "#" ? (
                          <p className="text-foreground font-medium">{item.value}</p>
                        ) : (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-foreground font-medium hover:text-primary transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border card-hover group"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div className="p-3 rounded-lg bg-secondary mr-4 group-hover:scale-110 transition-transform duration-200">
                        <Icon className={`w-6 h-6 ${social.color}`} />
                      </div>
                      <div>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-200">
                          {social.label}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {social.label === "GitHub" && "View my repositories"}
                          {social.label === "LinkedIn" && "Professional network"}
                          {social.label === "Telegram" && "Direct messaging"}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
              <h4 className="text-lg font-semibold text-foreground mb-3">Let&#39;s Work Together</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I&#39;m always interested in new opportunities and exciting projects. Whether you need a frontend developer,
                team lead, or technical consultant, I&#39;d love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
