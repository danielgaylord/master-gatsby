import React from 'react';
import { graphql } from 'gatsby';

export default function SinglePizzaPage() {
    return <p>Single Pizza!!!</p>
}

export const query = graphql`
    query($slug: String!) {
        pizza: sanityPizza(slug: { current: { eq: $slug } }) {
            name
            id
            image {
                asset {
                    gatsbyImageData
                }
            }
            toppings {
                name
                id
                vegetarian
            }
        }
    }
`;