import React from 'react';
export default class Home extends React.Component {

    render() {
        const style = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        }
        return (
            <article>
                <div style={style}>
                    <div  >
                        <div className={'container'}>
                            <h2 className={'teal-text'}>Hello World!</h2>
                            <p className="text-4xl">
                                How to ....
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}