import { Link } from '@remix-run/react';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { SocialMedia } from '~/components/images/SocialMedia';
import { Logo } from '~/components/images/Logo';

export function Footer() {
    return (
        <Container as="footer" className="mt-24 w-full py-24 sm:mt-32">
            <FadeIn>
                <div className="flex flex-col justify-between gap-8 border-t border-neutral-950/10 px-6 pt-12 md:flex-row md:items-center">
                    <div className="flex flex-col items-start gap-6">
                        <p className="text-base text-neutral-500">
                            © {new Date().getFullYear()} JESSEBUBBLE
                        </p>
                        <Link to="/" aria-label="Home">
                            <Logo className="h-10 w-auto" />
                        </Link>
                    </div>
                    <div className="flex flex-col items-start gap-6">
                        <p className="text-base text-neutral-500">
                            FIND ME ON SOCIAL MEDIA
                        </p>
                        <SocialMedia />
                    </div>
                </div>
            </FadeIn>
        </Container>
    );
}
