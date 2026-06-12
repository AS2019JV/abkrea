# Abkrea Ingeniería - Agentic Technical Setup Guide
**Infrastructure Paradigm:** Modern Decoupled Jamstack  
**Target Architecture:** High Performance, Strict Data Privacy, and Automated Conversion Lead Pipelines

---

## 1. Information Architecture & UX Engineering

### 1.1 Navigation Tree Optimization
The legacy WordPress hierarchical leaks (exposing theme sidebar mechanics) are deprecated. The navigation architecture is refactored into a strict, high-conversion structure:

1.  **Home (`/`)** - Core value proposition, SETEC credential presentation, and primary enrollment entry points.
2.  **Courses & Programs (`/courses`)** - Grid of engineering training modules (SolidWorks, Rhinoceros, Electricity) with clean, standardized metadata cards.
3.  **Approvals & Certifications (`/certifications`)** - Educational validity, legal frameworks, and benefits of the SETEC code.
4.  **Verify Certificate (`/verify`)** - Public verification engine for employers to validate student credentials.
5.  **Contact (`/contact`)** - Institutional communication matrix and lead capture form.

### 3.2 UI Grid Component Rectification
* **Course Card Component (`Recent Work` refactor):** Implement static CSS truncation or uniform flex-grid clamping on description blocks. The SolidWorks training card must match the height of Electricity and Rhinoceros components precisely by enforcing character caps on structural strings.
* **Asset Asset Replacement:** Eradicate all 2014 placeholder graphic sets (skateboards, clocks, cameras). Replace with actual engineering laboratory photography, software interface screenshots, or technical vector schema graphics (SVG).

---

## 2. Modern Decoupled Technology Stack

### 2.1 Frontend Frame & Rendering Engine
* **Framework:** **Astro** or **Next.js (React)** configured with **Static Site Generation (SSG)**.
    * *Rationale:* Course catalogs change infrequently. Generating pages as pure static HTML ensures sub-millisecond response times, absolute protection against database injection attacks, and a perfect 100% performance score on Core Web Vitals (critical for local SEO in Ambato/Ecuador and marketing landing pages).
* **Styling Engine:** **Tailwind CSS**.
    * *Implementation:* Build an unalterable global configuration blueprint (`tailwind.config.js`) tying the exact tokens defined in the Brand Guide (Industrial Navy, Precision Blue, Safety Amber) to prevent inline styling drift.

### 2.2 Backend Systems & Data Infrastructure
* **Database & Engine Platform:** **Supabase (PostgreSQL)**.
    * *Data Modeling:* Hosts tables for `courses`, `leads`, and a read-only public table for `student_certificates`.
    * *Security Matrix:* Implement strict **Row Level Security (RLS)** protocols. Student contact details, billing data, and enrollment history must be securely gated to fully comply with the Ecuadorian Organic Law on Personal Data Protection (LOPDP).
    * *Verification Engine:* The `/verify` route executes rapid client-side database queries matching student ID numbers or unique hash codes against certified rows, instantaneous proof of authenticity.

---

## 3. Lead Automation & Workflow Pipeline

### 3.1 CRM Webhook Architecture
* **Lead Capture:** Frontend forms dispatch clean JSON payloads via authenticated secure API webhooks immediately upon user conversion actions.
* **Orchestration Engine:** Route payloads directly through an instance of **n8n** or an enterprise CRM platform (e.g., GoHighLevel). 
* **Instant Sales Route:** As soon as an engineering lead submits a quotation request for a course in Ambato, the payload triggers an automated routing workflow into an instant sales pipeline, alerting representatives over secure corporate messaging.

### 3.2 Corporate Mail Infrastructure
* **Identity Migration:** Migrate the entire organizational communication footprint away from personal Gmail layers into **Google Workspace** or **Microsoft 365** utilizing the native `@abkrea.com` corporate identity domain.
* **Transactional Engine:** Integrate **Resend** or a similar high-deliverability programmatic email API service.
    * *Automated Triggers:* Configure workflows for zero-latency execution of transactional emails: enrollment confirmations, class starting reminders, automated secure PDF billing invoices, and cryptographic links to downloadable digital student certificates.

---

## 4. Technical Migration Checklist (Production Checklist)

- [ ] Register domain records and map DNS pointers to the modern hosting provider edge network.
- [ ] Configure `google-workspace` / `m365` MX records under `@abkrea.com` domain.
- [ ] Initialize Astro/Next.js repository and inject verified brand `tailwind.config.js` color variables.
- [ ] Port course information out of legacy databases; clean and filter descriptions to avoid grid breakage.
- [ ] Set up Supabase PostgreSQL schema with active RLS parameters protecting student records.
- [ ] Program verification component linking the `/verify` route to the public certificates table.
- [ ] Construct lead generation webhooks connecting frontend components directly to n8n pipelines.
- [ ] Conduct final Core Web Vitals audit ensuring performance scales at or near 100%.
- [ ] Permanently deprecate and tear down the old vulnerable WordPress `Spacious` theme instance.



---

# Abkrea Ingeniería - High-Performance Agentic Technical Setup Guide
**Infrastructure Paradigm:** Modern Decoupled Jamstack  
**Core Data Engine:** Supabase (PostgreSQL) + Secure Edge Gateways  
**Operational Target:** Maximize SETEC Conversion, Secure Local Lead Pipelines, and Enforce Structural Simplicity

---

## 1. Information Architecture & UX Trust Engineering

### 1.1 Capitalizing on the SETEC Competitive Advantage
To leverage the unassailable competitive advantage of the official qualification code **SETEC-CAL-2018-092** (regulated under the Ministry of Labor - MDT and Senescyt framework in Ecuador), the navigation and route architecture are engineered to establish immediate institutional trust. 

The legacy WordPress theme leaks are fully deprecated. The platform is refactored into a clear, conversion-focused structure:

[Home (/)] ──> [Courses Store (/courses)] ──> [SETEC Verification Hub (/verify)] ──> [Corporate B2B (/b2b)] ──> [Contact (/contact)]


#### Strategic Positioning Entrypoints
* **The Global Trust Banner:** Rendered natively as an inline vector asset (`.svg`) in the top utility navigation and hero section: `MDT/SETEC Qualified Technical Center: SETEC-CAL-2018-092`.
* **Corporate Tax Incentives (`/b2b`):** A dedicated route targeting Human Resources and Procurement officers in the Ecuadorian industrial sector. It explicitly details how training investments with Abkrea qualify for tax deductibility (*Deducibilidad del Impuesto a la Renta para Capacitación*) and comply with public procurement parameters.
* **Instant Verification Portal (`/verify`):** A public lookup interface where companies and alumni input a National ID (Cédula) or certificate hash to instantly validate legal training hours against the secure database.

### 1.2 UX Rectification Grid Component
* **Course Card Component Layout Symmetry:** Enforce an unalterable vertical constraint on elements within the `/courses` catalog. The historical issue of text overflow in the SolidWorks description breaking adjacent components (Electricity and Rhinoceros) is solved via explicit CSS multi-line truncation clamp configurations or uniform structured metadata rendering.
* **Asset Replacement Engine:** Permanently strip all generic 2014 placeholder image arrays (skateboards, clocks, cameras). Replace exclusively with high-resolution vector schema graphics (`.svg`), official UI CAD software capture blocks, or actual laboratory training photography.
* **Purging Template Pollutants:** Eliminate any historical blog footprints (*"Mac Book Air and a cup of Coffee"*, external ThemeGrill redirection paths). All interfaces, contact anchors, and support configurations must point to verified `@abkrea.com` corporate assets.

---

## 2. Supabase Core Data Architecture & Progression Engine

The data layer uses **Supabase** to manage leads, user authorization levels, and course models. The architecture follows a progressive implementation pathway: beginning with zero-auth lead capturing, scaling into a robust administrative control panel, and concluding with a fully decoupled relational product store.

[Phase 1: Zero-Auth Lead Capture] ──> [Phase 2: Secure Admin Control Panel] ──> [Phase 3: Relational Course Catalog]


### 2.1 Phase 1: Simple Lead Ingestion Engine
Public capture forms communicate directly with a structured PostgreSQL table using the public authenticated Supabase Client SDK. 

#### PostgreSQL Schema: `leads`
```sql
create table public.leads (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    full_name text not null,
    email text not null,
    phone text not null,
    course_interest text not null,
    organization_name text null,
    is_corporate_request boolean default false not null,
    lopdp_consent boolean default false not null check (lopdp_consent = true),
    lead_status text default 'new'::text not null check (lead_status in ('new', 'contacted', 'qualified', 'enrolled', 'lost')),
    notes text null
);

-- Enable Row Level Security (RLS)
alter table public.leads enable row level security;

-- Policy: Allow anonymous public insertions from web forms
create policy "Allow public lead ingestion" 
on public.leads for insert 
with check (true);

-- Policy: Restrict public data reads (Enforced until Phase 2 Auth)
create policy "Restrict public reading" 
on public.leads for select 
using (false);
Frontend Implementation Blueprint (TypeScript Next.js / Astro Server Actions)
TypeScript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function captureInboundLead(payload: {
  fullName: string;
  email: string;
  phone: string;
  courseInterest: string;
  organizationName?: string;
  isCorporateRequest: boolean;
  lopdpConsent: boolean;
}) {
  const { data, error } = await supabase
    .from('leads')
    .insert([
      {
        full_name: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        course_interest: payload.courseInterest,
        organization_name: payload.organizationName || null,
        is_corporate_request: payload.isCorporateRequest,
        lopdp_consent: payload.lopdpConsent,
        lead_status: 'new'
      }
    ]);

  if (error) {
    console.error('[Automation Error] Lead recording aborted:', error.message);
    throw new Error('System error recording your application.');
  }
  return { success: true };
}
```
## 2.2 Phase 2: Internal Lead Management Dashboard
To process leads efficiently without third-party platform sprawl, an internal dashboard is rendered at /admin/dashboard. This interface uses Supabase Auth and explicit JWT validation claims via Row Level Security.

Security & Access Control
```SQL
-- Policy: Restrict all CRUD capabilities on leads to authenticated corporate domains
create policy "Enforce admin access for corporate staff"
on public.leads for all
to authenticated
using (auth.jwt() ->> 'email' like '%@abkrea.com')
with check (auth.jwt() ->> 'email' like '%@abkrea.com');
```

## UI Dashboard Core Requirements
Operational Performance Metrics: Real-time visibility counts showcasing New Admissions Request, Total B2B Corporate Leads, and program demand arrays.

# Data Matrix Grid: Filterable list view prioritizing new requests, orderable by created_at timestamp metrics.

Inline Pipeline Actions: Status modifiers allowing operators to dynamically cycle states (new ──> contacted ──> enrolled), triggering instant background hooks.

## 2.3 Phase 3: Relational Course Catalog & Creation Engine
To eliminate hardcoded components and manual changes that can disrupt the visual layout, the system uses a relational database model to organize courses and descriptions.

Relational PostgreSQL Schema: Courses Infrastructure
```SQL
create table public.courses (
    id uuid default gen_random_uuid() primary key,
    slug text not null unique,
    title text not null,
    tagline text not null,
    description text not null,
    duration_hours integer not null,
    modality text not null check (modality in ('presencial', 'online', 'hibrido')),
    setec_approved boolean default true not null,
    is_active boolean default true not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table public.course_modules (
    id uuid default gen_random_uuid() primary key,
    course_id uuid references public.courses(id) on delete cascade not null,
    sort_order integer not null,
    module_title text not null,
    topics text[] not null
);

-- Active Security Configuration
alter table public.courses enable row level security;
alter table public.course_modules enable row level security;

-- Public Access Rules: Open read parameters for active items
create policy "Allow public viewing of active courses" 
on public.courses for select using (is_active = true);

create policy "Allow public viewing of active modules" 
on public.course_modules for select 
using (course_id in (select id from public.courses where is_active = true));

-- Admin Write Access Rules
create policy "Restrict course management to admins" on public.courses for all to authenticated using (auth.jwt() ->> 'email' like '%@abkrea.com');
create policy "Restrict module management to admins" on public.course_modules for all to authenticated using (auth.jwt() ->> 'email' like '%@abkrea.com');
Incremental Layout Stability
Because the web platform pulls arrays directly via static rendering patterns (SSG) or real-time caching queries, course cards adapt automatically to uniform bounds. This guarantees pixel-perfect layout alignment across all screen resolutions.
```

### 3. Automation Webhooks & Corporate Communication Pipeline
## 3.1 Lead Routing Automation
Webhook Strategy: Database triggers detect newly inserted records on public.leads.

Orchestration Execution: If a record contains is_corporate_request = true, an optimized JSON payload is securely transmitted to an execution pipeline hosted via n8n or an enterprise pipeline interface (such as GoHighLevel).

Instant Notification Flow: This automated alert loops directly into secure corporate messaging systems, notifying representatives immediately when a lead inquires about courses from Ambato or surrounding industrial centers.

## 3.2 Corporate Infrastructure Setup
Identity Infrastructure: Fully decouple communications from personal Gmail configurations (jp.muquinche@gmail.com). All components map to Google Workspace or Microsoft 365 systems utilizing the native @abkrea.com domain.

Transactional Email Routing: Programmatic messages (confirmations, access keys, PDF invoices) use a high-deliverability execution engine via Resend.

Automated Customer Triggers: Moving an applicant's state to enrolled on the management dashboard automatically triggers an execution block to dispatch clear registration records, class calendars, and details on official certificate verification.

### 4. Compliance & Personal Data Protection (LOPDP)
Given that the target audience comprises citizens within Ecuador, data management must conform to the regulations outlined in the Ley Orgánica de Protección de Datos Personales (LOPDP):

Informed Consent Capture: All public conversion contact forms require an un-checked confirmation checkbox linked to the privacy terms. This explicit consent status is stored directly within the user's data record.

Data Boundary Isolation: The public lookup mechanism under /verify is strictly limited. Queries execute remote validation calls that return only certificate authenticity status, name, and dates—never email coordinates, telephone strings, or financial identifiers.

Encryption at Rest: Ensure the database storage layer operates under continuous Transparent Data Encryption (TDE) protocols.

### 5. Technical Migration Checklist (Production Checklist)
[ ] Register and configure DNS mapping records pointing domain traffic directly to the edge content distribution network (CDN).

[ ] Implement official MX records under the @abkrea.com domain using secure enterprise systems (Google Workspace / M365).

[ ] Initialize the modern frontend codebase (Astro or Next.js) and inject global styling guidelines into tailwind.config.js.

[ ] Migration Phase: Sanitize historical syllabus content, eliminate broken formatting strings, and populate public.courses.

[ ] Apply the target PostgreSQL database structure inside Supabase and activate Row Level Security (RLS) tracking profiles.

[ ] Connect the dynamic lookup components on the /verify view directly to the read-only public certificate tables.

[ ] Establish automated webhooks linking frontend data submission flows directly to n8n orchestration nodes.

[ ] Perform an optimization audit to ensure Core Web Vitals performance benchmarks match or exceed 100%.

[ ] Deprecate and completely decommission the old vulnerable WordPress theme hosting platform