import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Activity,
  ArrowRight,
  Blocks,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Eye,
  Gauge,
  Globe2,
  Layers3,
  Mail,
  Menu,
  Network,
  Phone,
  Radar,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

import logoAsset from "@/assets/infinitynow-logo.jpeg.asset.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const navItems = [
  ["Inicio", "#inicio"],
  ["Servicios", "#servicios"],
  ["Infinity Guardian", "#guardian"],
  ["Nosotros", "#nosotros"],
  ["Contacto", "#contacto"],
] as const;

const services = [
  {
    icon: Network,
    title: "Network Security",
    summary: "Arquitecturas de red resistentes, segmentadas y preparadas para operar en entornos híbridos.",
    items: ["Firewalls, VPN y segmentación", "SD-WAN y seguridad perimetral", "Seguridad híbrida y multicloud"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    summary: "Operaciones de seguridad enfocadas en identificar, comprender y responder al riesgo.",
    items: ["Monitoreo 24/7 y Threat Hunting", "Gestión de vulnerabilidades", "Respuesta a incidentes"],
  },
  {
    icon: Server,
    title: "Infrastructure",
    summary: "Infraestructura confiable para sostener servicios críticos y continuidad operacional.",
    items: ["Servidores y virtualización", "Redes LAN/WAN y datacenter", "Diseño de alta disponibilidad"],
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    summary: "Protección consistente de cargas, redes y arquitecturas en las principales nubes.",
    items: ["AWS, Azure y Google Cloud", "Seguridad VPC/VNET", "Protección de workloads"],
  },
  {
    icon: Code2,
    title: "DevSecOps & Development",
    summary: "Seguridad integrada al ciclo de desarrollo, la automatización y las plataformas digitales.",
    items: ["Seguridad en CI/CD", "Automatización e integración de APIs", "Portales y plataformas"],
  },
  {
    icon: Search,
    title: "Security Auditing",
    summary: "Evaluaciones técnicas que convierten hallazgos en decisiones claras y priorizadas.",
    items: ["Auditorías y controles", "Ethical Hacking", "Threat Assessment"],
  },
] as const;

const guardianCapabilities = [
  [Activity, "Monitoreo", "Visibilidad continua de infraestructura, activos y eventos."],
  [Radar, "Detección", "SIEM, IDS/IPS y análisis continuo de señales de riesgo."],
  [Search, "Análisis", "Correlación de eventos y contexto para priorizar incidentes."],
  [Eye, "Threat Intelligence", "Caza proactiva y comprensión de patrones de ataque."],
  [Zap, "Automatización", "Flujos coordinados para reducir tareas operativas repetitivas."],
  [ShieldCheck, "Respuesta", "Contención, tickets y procedimientos frente a incidentes."],
  [BrainCircuit, "Inteligencia Artificial", "IA local para apoyar operaciones, gobierno y decisión."],
] as const;

const guardianLayers = [
  ["05", "Amelie", "Intelligence", "IA local · RAG · Automatización"],
  ["04", "Atlas", "Governance", "ITSM · CMDB · Gestión"],
  ["03", "Argus", "Visibility", "Monitoreo · NetFlow · SNMP"],
  ["02", "Oracle", "Detection", "SIEM · IDS/IPS · Threat Hunting"],
  ["01", "Zion", "Security", "Firewall · Zero Trust · VPN"],
] as const;

const securityLayers = [
  [Globe2, "Internet"],
  [ShieldCheck, "Perimeter Security"],
  [Network, "Network Security"],
  [Blocks, "Endpoint Security"],
  [Cloud, "Cloud Security"],
  [Code2, "Applications"],
  [Activity, "SOC / Monitoring"],
  [BrainCircuit, "Intelligence & Response"],
] as const;

const contactSchema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre.").max(100, "Máximo 100 caracteres."),
  company: z.string().trim().min(2, "Escribe el nombre de tu empresa.").max(120, "Máximo 120 caracteres."),
  email: z.string().trim().email("Escribe un correo válido.").max(255, "Correo demasiado largo."),
  phone: z.string().trim().min(7, "Escribe un teléfono válido.").max(30, "Teléfono demasiado largo.").regex(/^[+\d\s()-]+$/, "Usa solo números y símbolos telefónicos."),
  service: z.string().min(1, "Selecciona un servicio."),
  message: z.string().trim().min(10, "Cuéntanos un poco más.").max(1200, "Máximo 1200 caracteres."),
});

type ContactData = z.infer<typeof contactSchema>;

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#inicio" aria-label="InfinityNow, volver al inicio" className="block shrink-0">
      <img
        src={logoAsset.url}
        alt="InfinityNow Cybersecurity"
        width={compact ? 188 : 238}
        height={compact ? 55 : 70}
        className={compact ? "h-9 w-auto object-contain" : "h-12 w-auto object-contain sm:h-14"}
      />
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <nav className="site-container grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4" aria-label="Navegación principal">
        <Brand compact />
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
          <Button asChild variant="premium" size="lg"><a href="#contacto">Habla con un experto</a></Button>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>
      {open && (
        <div className="border-t border-border bg-background px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-lg flex-col gap-1">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-accent">{label}</a>
            ))}
            <Button asChild variant="premium" size="lg" className="mt-3"><a href="#contacto" onClick={() => setOpen(false)}>Habla con un experto</a></Button>
          </div>
        </div>
      )}
    </header>
  );
}

function InfrastructureVisual() {
  return (
    <div className="infrastructure-visual" aria-label="Arquitectura digital protegida">
      <div className="visual-grid" />
      <div className="visual-orbit visual-orbit-one" />
      <div className="visual-orbit visual-orbit-two" />
      <div className="visual-core">
        <ShieldCheck aria-hidden="true" />
        <span>CONTROL PLANE</span>
        <strong>SECURE</strong>
      </div>
      {["EDGE", "CLOUD", "DATA", "IDENTITY"].map((item, index) => (
        <div key={item} className={`visual-node visual-node-${index + 1}`}><span />{item}</div>
      ))}
      <div className="visual-status"><i /> INFRASTRUCTURE ONLINE</div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="hero-section scroll-mt-20 overflow-hidden">
      <div className="site-container grid min-h-[90svh] items-center gap-14 pb-20 pt-36 lg:grid-cols-[1.05fr_.95fr] lg:pt-32">
        <div className="relative z-10 max-w-3xl">
          <div className="eyebrow"><span /> Cybersecurity without limits.</div>
          <h1 className="mt-7 text-5xl font-semibold leading-[1.04] text-foreground sm:text-6xl lg:text-7xl">Protegemos tu<br /><span className="text-primary">mundo digital.</span></h1>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-foreground/90">Ciberseguridad, infraestructura y tecnología para empresas que no pueden detenerse.</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">Desde la protección de redes e infraestructura hasta monitoreo, respuesta y seguridad avanzada, InfinityNow ayuda a las organizaciones a reducir riesgos y mantener sus operaciones seguras.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="premium" size="xl"><a href="#servicios">Conoce nuestros servicios <ArrowRight /></a></Button>
            <Button asChild variant="outline" size="xl"><a href="#contacto">Habla con un experto</a></Button>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-border py-5">
            {["24/7", "MULTICLOUD", "ZERO TRUST"].map((item) => <div key={item} className="text-center text-xs font-semibold tracking-[.12em] text-muted-foreground first:text-left last:text-right">{item}</div>)}
          </div>
        </div>
        <InfrastructureVisual />
      </div>
      <a href="#servicios" className="scroll-cue" aria-label="Ir a servicios"><span>EXPLORAR</span><ChevronRight /></a>
    </section>
  );
}

export function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const Icon = service.icon;
  return (
    <article className="service-card reveal">
      <div className="flex items-start justify-between gap-4"><div className="service-icon"><Icon /></div><span className="index-label">0{index + 1}</span></div>
      <h3 className="mt-8 text-xl font-semibold text-foreground">{service.title}</h3>
      <p className="mt-3 min-h-20 text-sm leading-6 text-muted-foreground">{service.summary}</p>
      <ul className="mt-6 space-y-3 border-t border-border pt-5">
        {service.items.map((item) => <li key={item} className="flex gap-3 text-sm text-foreground/80"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
      </ul>
    </article>
  );
}

export function ServicesSection() {
  return (
    <section id="servicios" className="section-shell scroll-mt-20">
      <div className="site-container">
        <div className="section-heading reveal"><div><p className="section-kicker">NUESTROS SERVICIOS</p><h2>Seguridad para cada capa<br className="hidden sm:block" /> de tu organización.</h2></div><p>Combinamos ciberseguridad, infraestructura, redes y desarrollo para construir entornos tecnológicos más seguros, resilientes y eficientes.</p></div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 xl:grid-cols-3">{services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}</div>
      </div>
    </section>
  );
}

function AmeliePanel() {
  const actions = ["Detección", "Correlación", "Contención", "Remediación", "Gobierno"];
  return (
    <div className="amelie-panel reveal">
      <div className="amelie-console" aria-hidden="true">
        <div className="console-top"><span>AMELIE / ACTIVE</span><i /></div>
        <div className="amelie-mark"><Bot /></div>
        <div className="console-reading"><span>EVENT CORRELATION</span><strong>01:47:08</strong><div><i /><i /><i /><i /><i /></div></div>
      </div>
      <div>
        <p className="section-kicker">AI CYBER DEFENSE OFFICER</p>
        <h3 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">Amelie <span className="text-primary">— AI Security Assistant</span></h3>
        <p className="mt-6 text-lg leading-8 text-foreground/85">Una asistente de inteligencia artificial diseñada para ayudar a los equipos de seguridad a consultar información, analizar eventos y acelerar la toma de decisiones.</p>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">Amelie no es un chatbot genérico. En Guardian actúa como entidad operativa sobre IA local, coordinando señales de seguridad, contexto y flujos de respuesta bajo control de la organización.</p>
        <div className="mt-7 flex flex-wrap gap-2">{actions.map((action) => <span key={action} className="tech-tag">{action}</span>)}</div>
      </div>
    </div>
  );
}

export function GuardianSection() {
  return (
    <section id="guardian" className="guardian-section scroll-mt-20">
      <div className="site-container py-28">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_.7fr]">
          <div className="reveal"><div className="eyebrow"><span /> INFINITYNOW GUARDIAN™</div><h2 className="mt-7 max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-6xl">Tu seguridad.<br /><span className="text-primary">Siempre vigilante.</span></h2></div>
          <p className="reveal text-base leading-7 text-muted-foreground">Infinity Guardian es nuestra plataforma integrada de ciberseguridad, automatización e inteligencia artificial, diseñada para centralizar monitoreo, detección, análisis y respuesta frente a amenazas digitales.</p>
        </div>
        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {guardianCapabilities.map(([Icon, title, description], index) => <article key={title} className={`guardian-capability reveal ${index === 6 ? "lg:col-span-2" : ""}`}><Icon /><div><h3>{title}</h3><p>{description}</p></div></article>)}
        </div>
        <div className="mt-24 grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
          <div className="reveal"><p className="section-kicker">ARQUITECTURA MODULAR</p><h3 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">Cinco capas.<br />Una defensa coordinada.</h3><p className="mt-5 leading-7 text-muted-foreground">Cada capa se especializa en una función crítica. Amelie las conecta para convertir visibilidad técnica en decisiones y respuesta.</p></div>
          <div className="layer-stack reveal">{guardianLayers.map(([number, name, role, stack]) => <div key={name} className="guardian-layer"><span>{number}</span><strong>{name}</strong><em>{role}</em><small>{stack}</small></div>)}</div>
        </div>
        <div className="mt-24"><AmeliePanel /></div>
      </div>
    </section>
  );
}

export function CapabilitySection() {
  return (
    <section className="section-shell border-y border-border">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center reveal"><p className="section-kicker">DEFENSA EN PROFUNDIDAD</p><h2 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl">Una visión integral de la seguridad.</h2><p className="mt-5 leading-7 text-muted-foreground">Conectamos cada capa técnica para proteger la operación como un sistema completo, no como herramientas aisladas.</p></div>
        <div className="security-architecture reveal">
          {securityLayers.map(([Icon, label], index) => <div key={label} className="architecture-step"><div className="architecture-icon"><Icon /></div><span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong>{index < securityLayers.length - 1 && <ArrowRight className="architecture-arrow" />}</div>)}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const reasons = [
    ["01", "Experiencia técnica", "Conocimiento especializado en redes, infraestructura y ciberseguridad."],
    ["02", "Visión integral", "Conectamos infraestructura, redes, cloud, aplicaciones y seguridad."],
    ["03", "Tecnología", "Utilizamos tecnologías modernas, automatización e inteligencia artificial."],
    ["04", "Enfoque empresarial", "Soluciones diseñadas alrededor del riesgo y las necesidades reales de cada organización."],
  ];
  return (
    <>
      <section className="section-shell bg-secondary/40">
        <div className="site-container"><div className="section-heading reveal"><div><p className="section-kicker">POR QUÉ INFINITYNOW</p><h2>Más que seguridad.<br /><span className="text-primary">Resiliencia.</span></h2></div><p>Combinamos criterio técnico y entendimiento del negocio para construir seguridad que funciona en condiciones reales.</p></div><div className="mt-16 grid gap-px border-y border-border bg-border md:grid-cols-2 xl:grid-cols-4">{reasons.map(([number, title, description]) => <article key={number} className="reason-block reveal"><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div>
      </section>
      <section id="nosotros" className="section-shell scroll-mt-20">
        <div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div className="reveal"><p className="section-kicker">NOSOTROS</p><h2 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">Construimos tecnología para protegerla.</h2></div>
          <div className="about-copy reveal"><p>InfinityNow es una compañía especializada en ciberseguridad, infraestructura tecnológica y soluciones digitales.</p><p>Nuestro objetivo es ayudar a las organizaciones a proteger sus activos digitales, fortalecer su infraestructura y responder de manera efectiva ante un panorama de amenazas en constante evolución.</p><div className="mt-8 flex items-center gap-4 border-t border-border pt-6"><Building2 className="text-primary" /><span>Cybersecurity • Infrastructure • Technology</span></div></div>
        </div>
      </section>
    </>
  );
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ContactData>({ resolver: zodResolver(contactSchema), defaultValues: { service: "" } });
  const onSubmit = (_data: ContactData) => setSubmitted(true);
  return (
    <section id="contacto" className="contact-section scroll-mt-20">
      <div className="site-container grid gap-16 py-28 lg:grid-cols-[.8fr_1.2fr]">
        <div className="reveal"><p className="section-kicker">CONTACTO</p><h2 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl">¿Hablamos de<br /><span className="text-primary">seguridad?</span></h2><p className="mt-6 max-w-md leading-7 text-muted-foreground">Cuéntanos qué necesitas proteger, mejorar o transformar. Nuestro equipo puede ayudarte a encontrar la solución adecuada.</p><div className="mt-10 space-y-4"><a href="mailto:contact@infinitynow.co" className="contact-link"><Mail /> <span><small>Email</small>contact@infinitynow.co</span></a><a href="tel:+573002631015" className="contact-link"><Phone /> <span><small>Teléfono</small>+57 300 263 1015</span></a></div><Button asChild variant="whatsapp" size="lg" className="mt-8"><a href="https://wa.me/573002631015?text=Hola%20InfinityNow%2C%20quiero%20hablar%20con%20un%20experto%20en%20ciberseguridad." target="_blank" rel="noreferrer">WhatsApp <ArrowRight /></a></Button></div>
        <form className="contact-form reveal" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nombre" error={errors.name?.message}><Input {...register("name")} autoComplete="name" placeholder="Tu nombre" /></Field>
            <Field label="Empresa" error={errors.company?.message}><Input {...register("company")} autoComplete="organization" placeholder="Nombre de la empresa" /></Field>
            <Field label="Correo corporativo" error={errors.email?.message}><Input {...register("email")} type="email" autoComplete="email" placeholder="nombre@empresa.com" /></Field>
            <Field label="Teléfono" error={errors.phone?.message}><Input {...register("phone")} type="tel" autoComplete="tel" placeholder="+57 300 000 0000" /></Field>
          </div>
          <Field label="Servicio de interés" error={errors.service?.message}>
            <select {...register("service")} className="form-select" defaultValue=""><option value="" disabled>Selecciona una opción</option>{[...services.map((s) => s.title), "Infinity Guardian", "Otro"].map((item) => <option key={item} value={item}>{item}</option>)}</select>
          </Field>
          <Field label="Mensaje" error={errors.message?.message}><Textarea {...register("message")} rows={5} placeholder="Cuéntanos sobre tu necesidad o reto actual" /></Field>
          <Button type="submit" variant="premium" size="xl" className="w-full sm:w-auto">Solicitar asesoría <ArrowRight /></Button>
          <p className="form-note" role="status">{submitted ? "Información validada. El envío estará disponible cuando se conecte el servicio de formularios." : "Este formulario valida tus datos, pero todavía no envía información."}</p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <label className="form-field"><span>{label}</span>{children}{error && <small role="alert">{error}</small>}</label>;
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="site-container py-12"><div className="grid gap-10 border-b border-border pb-10 md:grid-cols-[1fr_auto]"><div><Brand /><p className="mt-4 text-sm text-muted-foreground">Cybersecurity • Infrastructure • Technology</p></div><div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">{navItems.slice(1).map(([label, href]) => <a key={href} href={href} className="text-muted-foreground hover:text-primary">{label}</a>)}<a href="#privacidad" className="text-muted-foreground hover:text-primary">Política de privacidad</a></div></div><div id="privacidad" className="grid scroll-mt-24 gap-6 pt-8 text-xs text-muted-foreground md:grid-cols-[1fr_auto] md:items-end"><div><p>© 2026 InfinityNow. Todos los derechos reservados.</p><p className="mt-3 max-w-2xl leading-5">Política de privacidad: los datos ingresados en el formulario no se almacenan ni se envían mientras no exista una integración de recepción activa.</p></div><div className="flex flex-col gap-2 md:text-right"><a href="mailto:contact@infinitynow.co">contact@infinitynow.co</a><a href="tel:+573002631015">+57 300 263 1015</a></div></div></div>
    </footer>
  );
}

export function CorporateSite() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("is-visible"); }), { threshold: 0.08 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return <><Navbar /><main><Hero /><ServicesSection /><GuardianSection /><CapabilitySection /><AboutSection /><ContactSection /></main><Footer /></>;
}