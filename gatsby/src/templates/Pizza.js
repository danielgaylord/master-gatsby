import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const PizzaGrid = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export default function SinglePizzaPage({ data }) {
    const { pizza } = data;
    const imageAsset = getImage(pizza.image.asset);
    return (
        <PizzaGrid>
            <GatsbyImage image={imageAsset} alt={pizza.name} />
            <div>
                <h2 className="mark">{pizza.name}</h2>
                <ul>
                    {pizza.toppings.map((topping) => (
                        <li key={topping.id}>{topping.name}</li>
                    ))}
                </ul>
            </div>
        </PizzaGrid>
    );
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