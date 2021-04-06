import Wall from '../dist/index';

test('wall is truthy', () => {
	const wall = Wall({ id: 4 });
	expect(wall).toBeTruthy();
});
