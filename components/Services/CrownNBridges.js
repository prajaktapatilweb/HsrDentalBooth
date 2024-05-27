import React from 'react'
import Structure from './Structure'

export default function CrownNBridges() {
    const DetailObject = [
        {
            type: 'title',
            text: 'Crown And Bridges Treatment In Chembur East'
        },
        {
            type: 'para',
            text: ['Explore the pinnacle of dental care at Dr. Akshay\'s DentAvenue, renowned for its exceptional Crown & Bridge Services in Chembur East. Our adept dental professionals are dedicated to providing precise and tailored solutions, specifically specializing in Crown and Bridges Treatment in Chembur East, ensuring the restoration of your smile.']
        },
        {
            type: 'subtitle',
            text: 'Benefits:'
        },
        {
            type: 'items',
            text: [
                'Tooth Restoration: Crowns and bridges effectively restore damaged or missing teeth.',
                'Natural Appearance: Our crowns and bridges are designed to seamlessly blend with your natural teeth.',
                'Long-Lasting Results: Durable materials ensure the longevity of your restored smile.',
            ]
        },
        {
            type: 'subtitle',
            text: 'Why Choose Us for Crown & Bridges Treatment in Chembur:'
        },

        {
            type: 'items',
            text: [
                'Expert Prosthodontists: Our skilled prosthodontists specialize in creating customized crowns and bridges.',
                'High-Quality Materials: We use top-tier materials for crowns and bridges, prioritizing both aesthetics and durability.',
                'Efficient Treatment: Streamlined procedures ensure quick and effective crown and bridge placements.',

            ]
        },


        {
            type: 'para',
            link: { bool: true, link: 'https://www.dentavenue.in/', elemNo: 1 },
            text: ['Choose Dr. Akshay\'s DentAvenue ', 'dental clinic in Chembur', 'for comprehensive Crown and Bridges Treatment, where excellence meets personalized care. Schedule a consultation today for a confident and enduring smile.'
            ]

        }
    ]

    return (
        <div>
            <Structure DetailObject={DetailObject} />
        </div>
    )
}
