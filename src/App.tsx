import { portfolioData } from './data/portfolio'
import Header from './components/Header'
import Section from './components/Section'
import ExperienceRow from './components/ExperienceRow'
import ProjectRow from './components/ProjectRow'
import ThoughtRow from './components/ThoughtRow'
import MiscRow from './components/MiscRow'
import Dock from './components/Dock'

export default function App() {
  const {
    name,
    headshot,
    tagline,
    email,
    socials,
    experience,
    projects,
    economicsProjects,
    education,
    thoughts,
    thoughtsPlaceholder,
    misc,
  } = portfolioData

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-[540px] px-6 pt-12 pb-32 sm:pt-18">
        <Header name={name} tagline={tagline} headshot={headshot} />

        <Section label="Experience">
          {experience.map((item) => (
            <ExperienceRow key={`${item.company}-${item.role}`} item={item} />
          ))}
        </Section>

        <Section label="Software Projects">
          {projects.map((item) => (
            <ProjectRow key={item.title} item={item} />
          ))}
        </Section>

        <Section label="Economics Projects">
          {economicsProjects.map((item) => (
            <ProjectRow key={item.title} item={item} />
          ))}
        </Section>

        <Section label="Education">
          {education.map((item) => (
            <ExperienceRow key={`${item.company}-${item.role}`} item={item} />
          ))}
        </Section>

        <Section label="Thoughts">
          {thoughts.length > 0 ? (
            thoughts.map((item) => <ThoughtRow key={item.title} item={item} />)
          ) : (
            <p className="py-3 text-[14px] text-ink-muted">{thoughtsPlaceholder}</p>
          )}
        </Section>

        <Section label="Misc">
          {misc.map((item) => (
            <MiscRow key={item.title} item={item} />
          ))}
        </Section>
      </main>

      <Dock email={email} socials={socials} />
    </div>
  )
}
