import { Link } from '@remix-run/react';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { SocialMedia } from '~/components/SocialMedia';
import { Logo } from '~/components/Logo';

export function Footer() {
    return (
        <Container as="footer" className="mt-24 sm:mt-32 lg:mt-40 w-full">
            <FadeIn>
                <div className="mb-20 pb-16 flex flex-col md:flex-row gap-8 items-center justify-between px-6 py-4 border-t border-neutral-950/10 pt-12">
                    <Link to="/" aria-label="Home">
                        <Logo className="h-10 w-auto" />
                    </Link>
                    <div className="">
                        <SocialMedia />
                    </div>
                </div>
            </FadeIn>
        </Container>
    );
}
