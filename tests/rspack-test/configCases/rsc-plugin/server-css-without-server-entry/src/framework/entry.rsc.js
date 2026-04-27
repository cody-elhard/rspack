import { renderToReadableStream } from 'react-server-dom-rspack/server';
import { App, getCssNodes } from '../App';

export const renderRscStream = () => {
	return renderToReadableStream(<App />);
};

it('should not expose server-entry metadata without the directive', async () => {
	expect(App.entryJsFiles).toBeUndefined();
	expect(App.entryCssFiles).toBeUndefined();
});

it('should not load css without a parent server entry', () => {
	const cssNodes = getCssNodes();

	expect(cssNodes.length).toBe(0);
});
