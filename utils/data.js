const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];
  
  const thoughtTexts = [

    'If the implementation is hard to explain, it\'s a bad idea.',
    'If the implementation is easy to explain, it may be a good idea.',
    'Namespaces are one honking great idea -- let\'s do more of those!',
    'Be kind to yourself.',
    'Here\'s a cool thought',
    'You have the potential to make beautiful things. Yes, you.',
    'You are learning valuable skills right now.',
    'You are worthy and deserving of respect.',
    'You are worthy of love.',
    'You are enough.',
    'You are capable of anything.',
    'You are stronger than you think.',
    'You are not alone.',
    'Empty yourself and let the universe fill you.',
    'You are not your thoughts.',
    'Stop looking behind you, you\'re not going that way.',
  ]

    const reactions = [
     'Love this!',
        'OMG',
        'LOL',
        'So true',
        'Haha',
        'Wow',
        'Ok!',
        'I don\'t agree',
        'I agree',
        'I disagree',
        'I\'m not sure',
        'I\'m sure',
        'Cool idea',
        'Great thought',
    ];

    // Get a random element from an array
    const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // Function to generate random thoughts.
    const getRandomThoughts = (int) => {
        const results = [];
        for (let i = 0; i < int; i++) {
            results.push({
                thoughtText: getRandomArrItem(thoughtTexts),
                username: getRandomArrItem(names),
                reactions: [
                    {
                        reactionBody: getRandomArrItem(reactions),
                        username: getRandomArrItem(names),
                    },
                ],
            });
        }
        return results;
    };

    // Gets a random name
    const getRandomName = () =>
        `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

    const getThoughReactions = (int) => {
        const results = [];
        for (let i = 0; i < int; i++) {
            results.push({
                reactionBody: getRandomArrItem(reactions),
                username: getRandomArrItem(names),
            });
        }
        return results;
    };

    // Export all functions as methods to be used in other files
    module.exports = { getRandomName, getRandomThoughts, getThoughReactions };
        