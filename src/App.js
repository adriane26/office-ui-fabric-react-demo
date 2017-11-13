import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    DocumentCard,
    DocumentCardPreview,
    DocumentCardTitle,
    DocumentCardActivity
} from 'office-ui-fabric-react/lib/DocumentCard';

class App extends Component {
  render() {
    return (
        <div>
            <DocumentCard onClickHref='http://adrianepurdy.com'>
                <DocumentCardPreview
                    previewImages={[
                        {
                            previewImageSrc: require('./documentpreview.png'),
                            iconSrc: require('./iconppt.png'),
                            width: 318,
                            height: 196,
                            accentColor: '#ce4b1f'
                        }
                    ]}
                />
                <DocumentCardTitle title='Revenue Stream Proposal' />
                <DocumentCardActivity
                    activity='Created Feb 23, 2016'
                    people={[
                            { name: 'Kat', profileImageSrc: require('./avatarkat.png') }
                        ]}
                />
            </DocumentCard>
        </div>
    );
  }
}

export default App;
