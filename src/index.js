import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType('feero/service-box', {
    title: 'Service Box',
    icon: 'admin-tools',
    category: 'widgets',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        }
    },
    edit({ attributes, setAttributes }) {
        return (
            <RichText
                tagName="p"
                value={attributes.content}
                onChange={(content) => setAttributes({ content })}
                placeholder="محتوای خدمات..."
            />
        );
    },
    save({ attributes }) {
        return <RichText.Content tagName="p" value={attributes.content} />;
    }
});
