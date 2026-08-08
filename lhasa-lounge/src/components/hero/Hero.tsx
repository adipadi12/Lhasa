import Button from "../common/Button";
import Container from "../common/Container";
import { restaurant } from "../../data/restaurant";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center">
            <Container>
                <div className="max-w-3xl">
                    <p className="text-yellow-500 uppercase tracking-[0.3em] mb-4">
                        {restaurant.tagline}
                    </p>

                    <h1 className="text-6xl md:text-8xl font-bold mb-6">
                        {restaurant.name}
                    </h1>

                    <p className="text-xl text-gray-300 mb-8">
                        Every meal tells a story.
                    </p>

                    <div className="flex gap-4">
                        <Button>
                            Reserve Table
                        </Button>

                        <Button variant="secondary">
                            View Menu
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;