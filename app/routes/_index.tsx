import { PageIntro } from '~/components/PageIntro';
import { HeroScroll } from '~/components/HeroScroll';
import { AboutSection } from '~/components/CTA/About';
import { ToolSection } from '~/components/CTA/Tools';
import { ShowcaseSection } from '~/components/CTA/Showcase';

export default function Index() {
    return (
        <>
            <PageIntro
                eyebrow="Hey, I'm Jesse"
                title="Focused on web standards and modern user experiences"
            >
                <p>
                    Based in San Antonio, I am a web developer, Adobe designer,
                    and community builder. My focus is on web standards and
                    modern user experiences. I specialize in creating
                    high-performance, user-friendly, and accessible online
                    experiences
                </p>
            </PageIntro>

            <HeroScroll />
            <ToolSection />
            <ShowcaseSection />
            <AboutSection />
        </>
    );
}
