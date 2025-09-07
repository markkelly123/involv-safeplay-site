// src/pages/index.tsx
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {
  Shield,
  Eye,
  Users,
  Brain,
  BrainCog,
  AlertTriangle,
  CheckCircle,
  Zap,
  Target,
  Clock,
  TrendingUp,
  Heart,
  Award
} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function SafePlay() {
  return (
    <>
      <Head>
        <title>SafePlay – Real-Time Safer Gaming Intelligence for EGMs | Involv</title>
        <meta
          name="description"
          content="Empower RGOs with real-time floor intelligence. SafePlay is the monitoring-tech pillar in Involv’s Three Tier Response Model—purpose-built for Australian venues and uncarded play."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-page text-primary font-sans min-h-screen">
        <Navigation />

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 pt-20 pb-24">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/logo-safeplay-blue.png"
                alt="SafePlay"
                width={200}
                height={60}
                className="mx-auto mb-6"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-brand to-brand-medium bg-clip-text text-transparent">
                Empower RGOs with
              </span>{' '}
              <span className="text-primary">Real-Time Floor Intelligence</span>
            </h1>
            <p className="text-xl text-brand mb-3 font-semibold">
              Monitoring-tech built for Australian venues - carded AND uncarded play
            </p>
            <p className="text-xl text-muted mb-10 max-w-4xl mx-auto leading-relaxed">
              SafePlay is the monitoring-tech pillar in Involv’s <strong>Three Tier Response Model</strong>.
              It surfaces risk patterns early, guides staff conversations, and documents everything. Gaming system agnostic.
              Not reliant on high rates of carded play.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-brand text-inverted px-10 py-4 rounded-xl hover:bg-brand-dark transition-all duration-300 font-semibold text-center hover:transform hover:scale-105 shadow-lg"
              >
                Schedule Your Demo
              </Link>
              <Link
                href="/contact"
                className="border-2 border-brand text-brand px-10 py-4 rounded-xl hover:bg-brand hover:text-inverted transition-all duration-300 font-semibold text-center"
              >
                See a Sample Alert Pack
              </Link>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="bg-subtle py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-primary">The Reality of Modern Gaming Floors</h2>
              <p className="text-muted text-xl max-w-3xl mx-auto leading-relaxed">
                RGOs are expected to see everything. They can’t. Subtle but harmful patterns often{' '}
                <strong>look normal</strong> in a busy room - and <strong>uncarded play</strong> hides the majority of
                signals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand">The Challenge</h3>
                <div className="space-y-4">
                  {challenges.map((challenge, i) => (
                    <div key={i} className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-accent-warm mt-1 mr-4 flex-shrink-0" />
                      <p className="text-muted">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-subtle">
                <div className="text-center mb-6">
                  <div className="bg-brand w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-10 h-10 text-inverted" />
                  </div>
                  <h4 className="text-xl font-bold text-brand mb-2">Real Venue Example</h4>
                  <div className="text-3xl font-bold text-primary mb-2">78 verified alerts</div>
                  <p className="text-muted text-sm">in one day at a 200+ machine Sydney Club (pilot)</p>
                </div>
                <p className="text-muted text-center italic">
                  “Both management and staff were surprised at what SafePlay
                  detected that we couldn’t see manually.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Three Tier Response Model */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">The Future of Safer Gaming: A New Era of Intelligence</h2>
            <p className="text-muted text-xl max-w-4xl mx-auto leading-relaxed">
              Beyond obligation: transform compliance from checkbox to competitive advantage. Involv’s{' '}
              <strong>Three Tier Response Model</strong> turns signals into <em>conversations</em> and conversations into{' '}
              <em>evidence</em>.
            </p>
          </div>

          {/* Three Tier Model Diagram */}
          <div className="bg-subtle rounded-2xl p-8 md:p-12 mb-16 border-2 border-brand">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-brand mb-4">Three Tier Response Model</h3>
              <p className="text-muted text-lg">An operating rhythm that elevates safer gaming from reactive to proactive.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {threeTierModel.map((tier, i) => (
                <div
                  key={i}
                  className={`bg-card rounded-xl p-6 text-center shadow-md ${
                    tier.highlight
                      ? 'border-2 border-brand bg-gradient-to-b from-surface-muted to-card'
                      : 'border-2 border-subtle'
                  }`}
                >
                  <div className="mb-4">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        tier.highlight ? 'bg-brand' : 'bg-brand-medium'
                      }`}
                    >
                      {tier.icon}
                    </div>
                    <h4 className={`text-xl font-bold mb-2 ${tier.highlight ? 'text-brand' : 'text-primary'}`}>
                      {tier.title}
                    </h4>
                    <p className="text-brand-medium text-sm font-semibold mb-4">{tier.mechanism}</p>
                  </div>
                  <p className="text-muted text-sm mb-4">{tier.description}</p>
                  <div className="text-xs text-muted italic">{tier.purpose}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="bg-brand rounded-xl p-6 border border-brand">
                <h4 className="text-xl font-bold text-inverted mb-2">SafePlay Program</h4>
                <p className="text-inverted">
                  Modern software for modern teams: data-led, system-driven, real-time pattern recognition that identifies
                  risk via activity data (carded and uncarded), applies a severity model (Amber → Red), and triggers
                  role-based notifications for proactive staff intervention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How SafePlay Works */}
        <section className="bg-subtle py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-primary">
                How SafePlay Works: Real-Time Pattern Recognition
              </h2>
              <p className="text-muted text-xl max-w-3xl mx-auto leading-relaxed">
                The “spreadsheet you always wanted” - connected to your floor, tuned to your venue profile, and built for
                live operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand">Hardware Installation</h3>
                <div className="space-y-4">
                  {hardwareFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-brand mt-1 mr-4 flex-shrink-0" />
                      <p className="text-muted">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-subtle">
                <div className="text-center">
                  <div className="bg-brand w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-10 h-10 text-inverted" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4">Real-Time Data Streaming</h4>
                  <p className="text-muted">
                    Machine activity data is streamed to SafePlay’s models and rules for immediate pattern analysis and
                    risk detection. Severity and routing are applied before alerts reach your team.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-subtle">
                <div className="text-center">
                  <div className="bg-brand w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BrainCog className="w-10 h-10 text-inverted" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4">Intelligent Analysis</h4>
                  <p className="text-muted">
                    Session time, funds-in velocity, loss% and cross-device behaviour are fused into venue-tuned thresholds.
                    The goal is actionable signals—not noise.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand">Software Intelligence</h3>
                <div className="space-y-4">
                  {softwareFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-brand mt-1 mr-4 flex-shrink-0" />
                      <p className="text-muted">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Signal Legend */}
            <div className="mt-16">
              <SignalLegend />
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              A Smarter Safer Gaming Monitoring Tool → Smarter Teams
            </h2>
            <p className="text-muted text-xl max-w-3xl mx-auto leading-relaxed">
  Shift your operational culture from 'responsible gaming' to 'safer gaming'.
  <br />
  If you can see the patterns, you can prevent the harm.
    <br />
    If you can prevent the harm, you can protect your
  community and your licence.
</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 hover:bg-surface-muted transition-all duration-300 hover:transform hover:scale-105 shadow-md border border-subtle"
              >
                <div className="bg-gradient-to-r from-brand to-brand-medium w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{benefit.title}</h3>
                <div className="text-xs text-brand-medium font-semibold mb-3">{benefit.modelTag}</div>
                <p className="text-muted mb-4">{benefit.description}</p>
                <div className="text-sm text-brand font-semibold">{benefit.outcome}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Evidence & Governance */}
        <section className="bg-subtle py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Evidence &amp; Governance Built In</h2>
              <p className="text-muted text-lg max-w-3xl mx-auto">
                Safer gaming is operational, not just technical. SafePlay creates an evidence trail that stands up to
                audit and aligns with your policies.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 border border-subtle">
                <h3 className="text-xl font-semibold text-primary mb-2">Audit-ready trail</h3>
                <p className="text-muted text-sm">
                  Time-stamped alerts, on-EGM messages (where supported), staff notes and outcomes flow into shift and
                  board reports.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-subtle">
                <h3 className="text-xl font-semibold text-primary mb-2">Calibrated thresholds</h3>
                <p className="text-muted text-sm">
                  Venue-specific alert levels reduce noise and match your risk profile, patron mix and trading peaks.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-subtle">
                <h3 className="text-xl font-semibold text-primary mb-2">Privacy &amp; access</h3>
                <p className="text-muted text-sm">
                  Role-based access, least-privilege defaults and data-minimisation by design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="bg-gradient-to-r from-brand to-brand-medium rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6 text-inverted">Ready to Transform Your Safer Gaming Efforts?</h2>
            <p className="text-xl mb-8 text-inverted opacity-90 max-w-3xl mx-auto">
              Join the venues using SafePlay to protect their players, their community and their future. Experience the
              power of real-time intelligence in safer gaming monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-card text-brand px-10 py-4 rounded-xl hover:bg-surface-muted transition-all duration-300 font-semibold hover:transform hover:scale-105 shadow-lg"
              >
                Schedule Your Demo
              </Link>
              <Link
                href="/contact"
                className="border-2 border-inverted text-inverted px-10 py-4 rounded-xl hover:bg-inverted hover:text-brand transition-all duration-300 font-semibold"
              >
                See a Sample Alert Pack
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

/* --------------------------- Components & Data --------------------------- */

function SignalLegend() {
  const items = [
    { label: 'Session Time', expl: 'Continuous time and accumulated time across machines' },
    { label: 'Funds-In Velocity', expl: 'Rate of buy-ins adjusted for session length and shift' },
    { label: 'Loss %', expl: 'One-off spikes and rolling average trends' },
    { label: 'Device Hopping', expl: 'Cross-machine time and sequence patterns' }
  ]
  return (
    <div className="bg-card rounded-xl p-6 border border-subtle">
      <h3 className="text-lg font-semibold text-primary mb-4">Signal Legend</h3>
      <ul className="space-y-3 text-sm text-muted">
        {items.map((i) => (
          <li key={i.label} className="flex">
            <span className="w-44 text-primary font-medium">{i.label}</span>
            <span className="flex-1">{i.expl}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const challenges = [
  'Uncarded play makes traditional monitoring very challenging for most venue environments',
  'Critical patterns occur during busy periods when staff attention is divided',
  'Manual observation alone cannot detect subtle behavioural changes over time',
  'Regulatory expectations continue to increase while resources remain limited',
  'Large floors create blind spots even for experienced RGOs'
]

const threeTierModel = [
  {
    title: 'Guest Services',
    mechanism: 'Human-led, relational, in-venue',
    description:
      'Casual, non-intrusive engagement builds rapport, reduces shame and normalises help-seeking.',
    purpose: 'Warm engagement, rapport, soft checks, behavioural context',
    icon: <Users className="w-8 h-8 text-blue-500" />,
    highlight: false
  },
  {
    title: 'Monitoring Tech',
    mechanism: 'Data-led, system-driven, real time',
    description:
      'Pattern recognition flags intensity changes (carded and uncarded), applies a severity model (Amber → Red), and routes alerts to the right role.',
    purpose: 'Identify risk patterns via activity data; trigger proactive staff intervention',
    icon: <Brain className="w-8 h-8 text-inverted" />,
    highlight: true
  },
  {
    title: 'Observable Signs',
    mechanism: 'Staff observation of real-time behaviour',
    description:
      'Staff identify the 22 observable signs of gambling harm—distress, agitation, borrowing, long sessions without breaks—turning soft indicators into professional interventions.',
    purpose: 'Identify emotional distress or compulsive play not detected by data alone',
    icon: <Eye className="w-8 h-8 text-blue-500" />,
    highlight: false
  }
]

const hardwareFeatures = [
  'Minimal installation footprint with existing gaming systems',
  'Seamless integration with venue infrastructure',
  'Continuous data streaming from all gaming machines',
  'Works independently of player card systems',
  'Secure, encrypted data transmission to the SafePlay platform',
  'Supports on-EGM messaging where enabled to nudge breaks and log interventions of record'
]

const softwareFeatures = [
  'Venue-tuned thresholds built from session time, funds-in velocity, loss% and cross-device behaviour',
  'Severity model: Amber (monitor) → Red (act now), with role-based notifications (RGO, duty manager)',
  'Guidance for RGOs to reduce awkward interactions and improve outcomes',
  'Complete shift report trail: who acted, when, why and the result',
  'Pager/SMS/email/web notifications—no native app dependency'
]

const keyBenefits = [
  {
    title: 'Uncarded Play Monitoring',
    modelTag: 'Tier 2: Monitoring Tech',
    description:
      'Finally, effective harm minimisation for venues where most play is anonymous - essential for pubs, invaluable for clubs.',
    outcome: 'Complete monitoring coverage',
    icon: <Shield className="w-8 h-8 text-inverted" />
  },
  {
    title: 'Real-Time Intelligence',
    modelTag: 'Tier 2: Monitoring Tech',
    description:
      'RGOs receive instant alerts as concerning patterns emerge, enabling immediate intervention.',
    outcome: 'Proactive player protection',
    icon: <Clock className="w-8 h-8 text-inverted" />
  },
  {
    title: 'Evidence-Based Approach',
    modelTag: 'Tier 2 → Tiers 1/3 reporting',
    description:
      'Replace guesswork with data-led insights that support both player wellbeing and regulatory compliance.',
    outcome: 'Confident decision-making',
    icon: <TrendingUp className="w-8 h-8 text-inverted" />
  },
  {
    title: 'Enhanced RGO Effectiveness',
    modelTag: 'Tier 2 → Tier 1 coaching prompts',
    description:
      'Empower your team with intelligence they cannot observe manually, making every RGO more effective.',
    outcome: 'Improved staff effectiveness',
    icon: <Users className="w-8 h-8 text-inverted" />
  },
  {
    title: 'Regulatory Confidence',
    modelTag: 'Tier 2 evidence; Tiers 1/3 practice',
    description:
      'Demonstrate proactive harm minimisation with audit trails and documented intervention protocols - demonstable culture of compliance.',
    outcome: 'Compliance assurance',
    icon: <CheckCircle className="w-8 h-8 text-inverted" />
  },
  {
    title: 'Community Trust',
    modelTag: 'All Tiers, consistently applied',
    description:
      'Show your commitment to player wellbeing and responsible gaming through visible, effective action.',
    outcome: 'Enhanced reputation',
    icon: <Heart className="w-8 h-8 text-inverted" />
  }
]// Force rebuild
