import { PageProps } from 'gatsby';
import React, { FC, useMemo } from 'react';
import ExternalLink from 'components/atoms/ExternalLink';
import DefinitionList, {
  DefinitionListProps,
} from 'components/molecules/DefinitionList';
import Layout from 'components/templates/Layout';
import Seo from 'components/templates/Seo';

export type AboutProps = PageProps;

const About: FC<AboutProps> = () => {
  const items = useMemo<DefinitionListProps['items']>(
    () => [
      {
        description: 'piro',
        term: 'Handle',
      },
      {
        description: 'Kohei Kawamura',
        term: 'Name',
      },
      {
        description: 'Tokyo, Japan',
        term: 'Address',
      },
      {
        description: 'Freelancer (Video Creator and Front End Developer)',
        term: 'Job',
      },
      {
        description: (
          <ExternalLink href="/about/resume">Engineering Resume</ExternalLink>
        ),
        term: 'Resume',
      },
    ],
    [],
  );

  return (
    <>
      <Seo path="/about" title="About" />
      <Layout>
        <DefinitionList items={items} />
      </Layout>
    </>
  );
};

export default About;
