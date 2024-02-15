import { Link } from '@remix-run/react';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { SocialMedia } from '~/components/SocialMedia';
import { Logo } from '~/components/Logo';

export function Footer() {
    return (
        <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
            <FadeIn>
                <div className="mb-20 pb-12 flex items-center justify-between px-6 py-4 border-t border-neutral-950/10 pt-12">
                    <Link to="/" aria-label="Home">
                        <Logo className="h-16 w-16" />
                    </Link>
                    <div className="">
                        <SocialMedia />
                    </div>
                </div>
            </FadeIn>
        </Container>
    );
}
