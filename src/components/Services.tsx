// Template-enhanced component
// Generated: 2025-08-20T03:29:39.571Z
// Section: services
// Category: services
// Template ID: services-c002
// Page: Services

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Code2,
  Palette,
  Shield,
  Rocket,
  BarChart3,
  Database
} from "lucide-react"

export default function SAPIntegrationServices() {
  const services = [
    {
      id: "sap-integration",
      title: "SAP Integration Services",
      description: "Seamless integration of your SAP systems with other business applications",
      longDescription: "Our SAP integration services help you connect your SAP systems with other critical business applications, enabling data flow, process automation, and streamlined operations. We leverage our deep expertise in SAP and enterprise integration to deliver customized solutions that drive efficiency and productivity.",
      icon: Database,
      benefits: [
        "Bi-directional data synchronization",
        "Automated business workflows",
        "Real-time reporting and analytics",
        "Improved operational visibility"
      ],
      pricing: "Starting at $10,000/month",
      timeline: "3-6 months typical engagement",
      featured: true,
      badge: "Most Popular"
    },
    {
      id: "sap-consulting",
      title: "SAP Consulting",
      description: "Strategic guidance and implementation support for your SAP landscape",
      longDescription: "Our SAP consulting services help you maximize the value of your SAP investments. From strategic planning to system optimization, our experts work closely with your team to align your SAP solutions with your business objectives.",
      icon: BarChart3,
      benefits: [
        "SAP system assessment and roadmap",
        "Business process re-engineering",
        "SAP implementation and configuration",
        "Change management and training"
      ],
      pricing: "Custom quotes available",
      timeline: "Varies based on project scope"
    },
    {
      id: "sap-support",
      title: "SAP Support and Maintenance",
      description: "Comprehensive support to ensure the optimal performance of your SAP systems",
      longDescription: "Our SAP support and maintenance services provide you with the expertise and resources to keep your SAP landscape running smoothly. From proactive monitoring to issue resolution, we ensure your SAP systems are always up-to-date and performing at their best.",
      icon: Shield,
      benefits: [
        "24/7 technical support",
        "Preventive maintenance and updates",
        "Performance optimization and tuning",
        "Compliance and security management"
      ],
      pricing: "Starting at $5,000/month",
      timeline: "Ongoing support and maintenance"
    },
    {
      id: "sap-migration",
      title: "SAP Migration and Upgrades",
      description: "Seamless transition to the latest SAP technologies",
      longDescription: "We help you navigate the complexities of SAP migrations and upgrades, ensuring a smooth transition to the latest versions and platforms. Our experienced team will guide you through the process, minimizing disruptions and maximizing the benefits of your SAP investments.",
      icon: Rocket,
      benefits: [
        "Comprehensive migration planning",
        "Data conversion and integration",
        "User training and change management",
        "Post-migration support and optimization"
      ],
      pricing: "Custom quotes available",
      timeline: "Varies based on project scope"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            SAP Integration Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Unlock the Power of Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              SAP Ecosystem
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Seamless integration, strategic consulting, and comprehensive support for your SAP landscape
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Pricing:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Get Started
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Unlock the Full Potential of Your SAP Ecosystem</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our SAP integration experts are ready to help you streamline your operations, improve efficiency, and drive business growth. Schedule a consultation to learn more.
          </p>
          <Button size="lg">
            Schedule a Consultation
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}