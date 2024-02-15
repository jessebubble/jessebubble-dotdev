import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { useState } from 'react';

export function Table() {
    const [base, setBase] = useState(1);
    const [rows, setRows] = useState([
        {
            name: 'devSA',
            web: 'devsa.com',
            description:
                'A simple shrine that introduces the player to the basic mechanics of the game.',
            meetups: 'Hybrid',
        },
        {
            name: 'Alamo Angular',
            web: 'meetup.com',
            description:
                'A shrine that requires the player to solve a simple puzzle involving moving blocks.',
            meetups: 'Virtual',
        },
        {
            name: 'Cloud Native',
            web: 'linkedin.com',
            description:
                'A shrine that requires the player to use their runes to solve a puzzle.',
            meetups: 'Virtual',
        },
        {
            name: 'Machine Learning',
            web: 'tba.com',
            description:
                'A shrine that requires the player to use their runes to solve a series of puzzles.',
            meetups: 'In-person',
        },
    ]);

    const handleDoubleClick = (index) => {
        setRows(rows.filter((_, i) => i !== index));
    };

    const handleAddRow = () => {
        setRows([...rows, { name: '', web: '', description: '', meetups: '' }]);
        setBase(base + 1);
    };

    return (
        <div className="mt-24 sm:mt-32 lg:mt-40">
            <Container className="pt-16">
                <FadeIn>
                    <div className="flex items-center justify-center px-6 py-4">
                        <table>
                            <caption className="flex- mb-4 items-center justify-between">
                                <h2 className="text-2xl font-bold text-neutral-950">
                                    Leveraging the power of the web
                                </h2>
                                <p className="mt-2 text-sm text-spursPink">
                                    <strong>
                                        <kbd>Double click</kbd> to delete a row
                                    </strong>
                                </p>
                            </caption>
                            <thead>
                                <tr className="bg-gray-200 text-left">
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Web</th>
                                    <th className="px-4 py-2">Description</th>
                                    <th className="px-4 py-2">Meetups</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, index) => (
                                    <tr
                                        key={index}
                                        onDoubleClick={() =>
                                            handleDoubleClick(index)
                                        }
                                        className="hover:bg-gray-200"
                                    >
                                        <td
                                            className="border px-4 py-2"
                                            contentEditable
                                        >
                                            {row.name}
                                        </td>
                                        <td
                                            className="border px-4 py-2"
                                            contentEditable
                                        >
                                            {row.web}
                                        </td>
                                        <td
                                            className="border px-4 py-2"
                                            contentEditable
                                        >
                                            {row.description}
                                        </td>
                                        <td
                                            className="border px-4 py-2"
                                            contentEditable
                                        >
                                            {row.meetups}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan="4">
                                        <button
                                            onClick={handleAddRow}
                                            className="mb-6 mt-6 rounded bg-neutral-950 px-4 py-2 text-white hover:bg-neutral-800"
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            <span>Add</span>
                                        </button>
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </FadeIn>
            </Container>
        </div>
    );
}
