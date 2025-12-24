import Card from './components/Card'
import HeroSection from './components/HeroSection'
import Section from './components/Section'
import Icon1 from '../../public/images/web-development.svg'
import Icon2 from '../../public/images/full-stack-applications.svg'
import Icon3 from '../../public/images/ui-ux-design.svg'
import Icon4 from '../../public/images/logo-&-branding.svg'
import Icon5 from '../../public/images/e-commerce-solutions.svg'
import Icon6 from '../../public/images/cloud-hosting.svg'
import fast from '../../public/images/fast-secure.svg'


export default function Home() {

    const Services = [
        {
            icon: Icon1,
            title: 'Web Development',
            desc: 'Custom websites built with modern frameworks for optimal performance.'
        },
        {
            icon: Icon2,
            title: 'Full-Stack Applications',
            desc: 'Scalable web applications from database to frontend deployment.'
        },
        {
            icon: Icon3,
            title: 'UI/UX Design',
            desc: 'Beautiful, user-centered interfaces that drive engagement.'
        },
        {
            icon: Icon4,
            title: 'Logo & Branding',
            desc: 'Memorable brand identities that make your business stand out.'
        },
        {
            icon: Icon5,
            title: 'E-commerce Solutions',
            desc: 'Secure, conversion-optimized online stores for your products.'
        },
        {
            icon: Icon6,
            title: 'Cloud Hosting',
            desc: 'Fast, reliable hosting with 99.9% uptime guarantee.'
        },
    ]
    

    const USP = [
        {
            icon: fast,
            title: 'title',
            desc: 'desc',
        },
        {
            icon: fast,
            title: 'title2',
            desc: 'desc',
        },
        {
            icon: fast,
            title: 'title3',
            desc: 'desc',
        },
        {
            icon: fast,
            title: 'title4',
            desc: 'desc',
        },
    ]
    return (
        <main>
            <Section className='h-screen overflow-visible flex items-center -mt-18'>
                <HeroSection
                    title='Powerful Websites & Brands That'
                    subtitle='We turn ideas into impactful digital experiences — from web development to branding & cloud-powered solutions.'
                    buttonLabel='Get a Free Quote'
                    buttonLink="/contact" />
            </Section>


            <Section py='20' sectionTitle='Our Services' sectionDesc='Comprehensive digital solutions tailored to your business needs'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                    {Services.map((service, index) => (
                        <Card className='bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)]' key={index} icon={service.icon} title={service.title} description={service.desc} />
                    ))}
                </div>
            </Section>

            <Section py='20' sectionTitle='Why Choose PixelStack'>
                <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6'>
                    {USP.map((usp, index) =>(
                        <Card align='center' key={index} icon={usp.icon} title={usp.title} description={usp.desc} />
                    ))}
                    
                </div>
            </Section>
        </main>
    )
}
