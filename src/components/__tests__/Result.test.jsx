import { render, screen } from '@testing-library/react';
import Result from '../Result';

test('should render result content', () => {
    const testTitle = 'test title';
    const data = {
        mediaType: 'image',
        mediaUrl: '',
        title: testTitle,
        description: 'test description',
        createdAt: 0,
        event: {
            title: 'test event title',
            city: 'test event city'
        }
    }

    render(
        <Result data={data}/>
    );
    
    const imageBlock = screen.getByAltText(testTitle);
    expect(imageBlock).toBeInTheDocument();
})