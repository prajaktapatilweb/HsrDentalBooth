import React from 'react'
import Structure from './Structure'

export default function KidsDentistInChembur() {
    const DetailObject = [
        {
            type: 'title',
            text: 'Smile Designing in Chembur East'
        },
        {
            type: 'para',
            text: ['Embark on a journey towards a stunning smile with our Smile Designing services in Chembur East at Dr. Akshay\'s DentAvenue. Our skilled professionals specialize in creating personalized Smile Makeovers, ensuring you achieve the smile you\'ve always dreamed of.']
        },
        {
            type: 'subtitle',
            text: 'Benefits:'
        },
        {
            type: 'items',
            text: [
                'Customized Aesthetics: Smile designing focuses on enhancing your unique facial features for a personalized look.',
                'Improved Harmony: Achieve balance and symmetry in your smile through meticulous design.',
                'Comprehensive Approach: From teeth alignment to color, every aspect is considered for a stunning smile.',

            ]
        },
        {
            type: 'subtitle',
            text: 'Why Choose Us for Smile Designing in Chembur:'
        },

        {
            type: 'items',
            text: [
                'Expert Cosmetic Dentists: Our cosmetic dentists specialize in creating natural and beautiful smiles.',
                'Digital Smile Design: Utilizing advanced technology for precise planning and visualization.',
                'Patient Collaboration: Your input is valued throughout the smile designing process, ensuring your satisfaction.',


            ]
        },


        {
            type: 'para',
            link: { bool: true, link: 'https://www.dentavenue.in/', elemNo: 2 },
            text: ['Reveal the true potential of your smile with our Smile Designing in Chembur East. At Dr. Akshay\'s DentAvenue, a captivating Smile Makeover awaits, promising not just a change in your smile but a transformation in your confidence and outlook.', ' Schedule a consultation today with our top ', 'dentists in Chembur', ' and let us design the perfect smile tailored just for you.'
            ]

        }
    ]
    const FAQ = [
        {
            Q: 'What is Smile Designing, and how does it differ from a Smile Makeover?',
            A: 'Smile Designing involves planning the aesthetics of your smile, focusing on individual tooth appearance. A Smile Makeover is a broader term that may include various cosmetic procedures to enhance overall smile aesthetics.'
        },

        {
            Q: 'How long does the Smile Designing process take?',
            A: 'The duration varies based on individual needs. Simple cases may take a few weeks, while more complex Smile Makeovers may require several appointments over a few months.'
        },

        {
            Q: 'Are there any risks or side effects associated with Smile Designing?',
            A: 'Smile Designing is generally safe, with minimal risks. Our experienced cosmetic dentists discuss potential side effects, if any, during the consultation.'
        },

        {
            Q: 'Can Smile Designing fix gaps or misalignments in my teeth?',
            A: 'Yes, Smile Designing can address issues like gaps, misalignments, and uneven teeth. Our experts tailor the design to address specific concerns.'
        },

        {
            Q: 'How do I maintain the results of my Smile Makeover?',
            A: 'Regular oral hygiene practices, including brushing, flossing, and professional cleanings, help maintain the longevity of your Smile Makeover results.'
        },

        {
            Q: 'Is Smile Designing suitable for everyone?',
            A: 'Smile Designing is personalized to each individual\'s needs. During the consultation, our cosmetic dentists assess your oral health and discuss the best options for you.'
        },

    ]
    return (
        <div>
            <Structure DetailObject={DetailObject} />
        </div>
    )
}
