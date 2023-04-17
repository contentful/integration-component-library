import { render } from '@testing-library/react';

import EntityCard from './EntityCard';

describe('EntityCard component', () => {
    it('Renders', () => {
        render(
            <EntityCard
                contentType='Some Content Type'
                entityType='Some Entity Type'
                title="Some test title"
            />
        );

        const card = document.querySelector('#EntityCard');
        const testTitle = document.querySelector('[data-test-id="title"]')
        const loadingSkel = document.querySelector('[data-test-id="cf-ui-skeleton-form"]')
        expect(card).toBeVisible();
        expect(testTitle).toHaveTextContent('Some test title');
        expect(loadingSkel).toBeNull();
    });

    it('Shows Missing text if title is missing', () => {
        render(
            <EntityCard
                contentType='Some Content Type'
                entityType='Some Entity Type'
                title=""
            />
        );

        const testTitle = document.querySelector('[data-test-id="title"]')
        expect(testTitle).toHaveTextContent('Some Entity Type Missing')
    })

    it('Shows loading skeleton if loading', () => {
        render(
            <EntityCard
                contentType='Some Content Type'
                entityType='Some Entity Type'
                title="Some Title"
                loading={true}
            />
        );

        const loadingSkel = document.querySelector('[data-test-id="cf-ui-skeleton-form"]')
        expect(loadingSkel).not.toBeNull();
    })
});
