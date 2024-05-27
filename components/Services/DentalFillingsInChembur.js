import React from 'react'
import Structure from './Structure'

export default function DentalFillingsInChembur() {
    const DetailObject = [
        {
            type: 'title',
            text: 'Dental Fillings in Chembur'
        },
        {
            type: 'para',
            text: ['At Dr. Akshay\'s DentAvenue, we prioritize your oral health with our exceptional Dental Fillings services in Chembur. Our experienced team employs advanced techniques to restore and preserve your natural teeth. Experience reliable and effective dental solutions for a healthier, lasting smile.']
        },
        {
            type: 'subtitle',
            text: 'Benefits:'
        },
        {
            type: 'items',
            text: [
                'Tooth Preservation: Fillings prevent further decay, preserving the natural structure of your teeth.',
                'Aesthetic Integration: Our dental fillings are designed to match the color and texture of your natural teeth.',
                'Minimized Sensitivity: Advanced materials contribute to reduced post-filling sensitivity.',

            ]
        },
        {
            type: 'subtitle',
            text: 'Why Choose Us for Dental Fillings in Chembur:'
        },

        {
            type: 'items',
            text: [
                'Skilled Restorative Dentists: Our restorative dentists specialize in precise and efficient filling procedures.',
                'Biocompatible Materials: We prioritize the use of safe and durable materials for optimal oral health.',
                'Patient Comfort: Our team ensures a comfortable experience throughout the filling process.',
            ]
        },


        {
            type: 'para',
            link: { bool: true, link: 'https://www.dentavenue.in/', elemNo: 1 },
            text: ['Experience the confidence of a restored smile with our Dental Fillings treatment at Dr. Akshay\'s', 'DentAvenue dental clinic in Chembur.', 'Our commitment to precision and patient well-being ensures optimal results for your dental needs. Schedule a consultation today to discover comprehensive solutions for dental cavity fillings and composite tooth fillings.'
            ]

        }
    ]

    return (
        <div>
            <Structure DetailObject={DetailObject} />
        </div>
    )
}
