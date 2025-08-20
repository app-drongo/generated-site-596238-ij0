// Template-enhanced component
// Generated: 2025-08-20T03:29:39.051Z
// Section: features
// Category: features
// Template ID: features-c001
// Page: Home

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette,
  Code2,
  Headphones,
  Lock
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Blazing Fast Performance",
      description: "Optimized for lightning-fast load times and seamless user experiences.",
      badge: "Performance"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Robust security features and compliance certifications for peace of mind.",
      badge: "Security"
    },
    {
      icon: Smartphone,
      title: "Responsive & Mobile-Friendly",
      description: "Pixel-perfect designs that adapt flawlessly to any device or screen size.",
      badge: "Design"
    },
    {
      icon: Globe,
      title: "Global Content Delivery",
      description: "Worldwide CDN ensures fast loading from anywhere in the world.",
      badge: "Infrastructure"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Insights",
      description: "Powerful metrics and reporting to track your business performance.",
      badge: "Analytics"
    },
    {
      icon: Palette,
      title: "Seamless Brand Integration",
      description: "Fully customizable to match your unique brand identity and style.",
      badge: "Customization"
    },
    {
      icon: Code2,
      title: "Developer-Friendly Platform",
      description: "Clean APIs, extensive documentation, and robust developer tools.",
      badge: "Developer"
    },
    {
      icon: Headphones,
      title: "Dedicated 24/7 Support",
      description: "Expert assistance whenever you need it, around the clock.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Ironclad Data Privacy",
      description: "Your data is secure and never shared or sold.",
      badge: "Privacy"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            SAP Integration Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Streamline Your Business with
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              SAP Integration Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Unlock the full potential of your SAP systems with our comprehensive suite of integration services. 
            Boost efficiency, enhance visibility, and drive business growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to streamline your SAP integration?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Schedule a Consultation
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}