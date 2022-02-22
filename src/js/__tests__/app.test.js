import destructorize from '../app';

test('destructorize basic test', () => {
    const character = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...1',
                description: 'Двойной выстрел наносит двойной урон',
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...2',
            },
        ],
    };

    const received = destructorize(character);

    const expected = [
        [
            { key: 'id', value: 8 },
            { key: 'name', value: 'Двойной выстрел' },
            { key: 'icon', value: 'http://...1' },
            { key: 'description', value: 'Двойной выстрел наносит двойной урон' },
        ],
        [
            { key: 'id', value: 9 },
            { key: 'name', value: 'Нокаутирующий удар' },
            { key: 'icon', value: 'http://...2' },
            { key: 'description', value: 'Описание недоступно' },
        ],
    ];

    expect(expected).toEqual(received);
});
