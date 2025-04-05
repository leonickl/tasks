import { default as P } from '@/Priority';
import { Flag } from 'react-bootstrap-icons';

export default function Priority({ priority = 0 }: { priority?: number }) {
    const pr = new P(priority);

    return (
        <div>
            <Flag />

            <div>
                <div>
                    <input
                        type="radio"
                        id="priority-0"
                        name="priority"
                        value="0"
                        checked={pr.none()}
                    />
                    <label htmlFor="priority-0" className="priority-0"></label>
                </div>

                <div>
                    <input
                        type="radio"
                        id="priority-9"
                        name="priority"
                        value="9"
                        checked={pr.low()}
                    />
                    <label htmlFor="priority-9" className="priority-9"></label>
                </div>

                <div>
                    <input
                        type="radio"
                        id="priority-5"
                        name="priority"
                        value="5"
                        checked={pr.mid()}
                    />
                    <label htmlFor="priority-5" className="priority-5"></label>
                </div>

                <div>
                    <input
                        type="radio"
                        id="priority-1"
                        name="priority"
                        value="1"
                        checked={pr.high()}
                    />
                    <label htmlFor="priority-1" className="priority-1"></label>
                </div>
            </div>
        </div>
    );
}
