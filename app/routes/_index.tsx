import { PageIntro } from '~/components/PageIntro';
import { AboutSection } from '~/components/CTAAbout';
import { Mask } from '~/components/project-examples/text-noise-mask/Mask';
import { Group } from '~/components/project-examples/bouncy-image-radio/Group';
import { ViewTransitionsGrid } from '~/components/project-examples/view-transitions-grid/Grid';
import { Table } from '~/components/project-examples/view-transitions-table/Table';
import { Compare } from '~/components/project-examples/compare-input-range/Compare';
import { RadialSwirl } from '~/components/project-examples/radial-gradient-swirl/RadialSwirl';
import { Bento } from '~/components/project-examples/bento-radio-carousel/Bento';
import { TextScroll } from '~/components/project-examples/variant-text-scroll/Text';
import { DragDrop } from '~/components/project-examples/drag-drop/Drag';
import { ShowcaseSection } from '../components/CTAShowcase';
import { ToolSection } from '../components/CTATools';

export default function Index() {
    return (
        <>
            <PageIntro
                eyebrow="Hey, I'm Jesse"
                title="Focused on web standards and modern user experiences"
                centered={true}
            >
                <p>
                    Based in San Antonio, I am a web developer, Adobe designer,
                    and community builder. My focus is on web standards and
                    modern user experiences. I specialize in creating
                    high-performance, user-friendly, and accessible online
                    experiences
                </p>
            </PageIntro>

            <ToolSection />
            <ShowcaseSection />
            <AboutSection />
        </>
    );
}
