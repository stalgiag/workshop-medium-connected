import React from 'react';
import {useStaticQuery, graphql } from 'gatsby';

export default function Markdown( props) {
    let html;
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                nodes {
                    html
                    frontmatter {
                        category
                    }
                }
            }
        }
    `);
    for(const d of data.allMarkdownRemark.nodes) {
        if(d.frontmatter.category === props.category) {
            html = d.html;
        }
    }
    return (
        <div className='markdown-content'>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
}