import React, { FC, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import firebase from '../../firebase';
import { TileData } from '../../types/types';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '80%',
      textAlign: 'center',
      marginTop: '2%',
    },
    tileImage: {
      height: '218px',
      width: '218px',
    },
  })
);

const ImageItemList: FC = () => {
  const [data, setData] = useState<TileData[]>([]);
  const { keyword } = useParams();
  const classes = useStyles();
  const history = useHistory();

  // 非同期処理 型指定
  // firebaseでのDatabaseからkeyword,array-containsの条件を引数で検索
  const getData = async (searchWord: string | undefined) => {
    const db = firebase.firestore();
    const tileDataRef = db.collection('tileData');
    const searchedData = tileDataRef.where(
      'keyword',
      'array-contains',
      searchWord
    );

    // searched data get をawaitで待たせる
    const snapShot = await searchedData.get();
    const temporaryData: object[] = [];

    // snapShot.docsに格納, mapにて引数（doc)に繰り返し展開
    snapShot.docs.map((doc) => {
      temporaryData.push(doc.data());
    });

    setData(temporaryData as TileData[]);
  };

  //レンダリングが終了時に呼ばれるHook useEffect
  useEffect(() => {
    getData(keyword);
  }, []);

  return (
    <div className={classes.root}>
      {data.map((tile) => (
        <div>
          <Button onClick={() => history.push('/download/' + tile.title)}>
            <img
              className={classes.tileImage}
              src={tile.image}
              alt={tile.title}
            />
          </Button>
          <h3>{tile.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ImageItemList;
