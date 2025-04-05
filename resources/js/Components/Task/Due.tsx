import { Clock } from 'react-bootstrap-icons';

export default function Due() {
    return (
        <div>
            <Clock />

            <div>
                <div>
                    <input
                        type="date"
                        name="due-date"
                        value={new Date().toISOString().split('T')[0]}
                    />
                    <div>&times;</div>
                </div>

                <div>
                    <input type="time" name="due-time" />
                    <div>&times;</div>
                </div>
            </div>
        </div>
    );
}
