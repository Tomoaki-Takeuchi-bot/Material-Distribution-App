// UI/UXはMaterial UIを活用
// 入力フィールドの作成 Paper
// IconButton,InputBase
// *写真素材:Free picture

import React, { FC, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';

// バックグラウンド写真の変更は下記URL。assetsのファイルも変更が必要。
import papership from '../../assets/images/papership.jpg';

const useStyle = makeStyles(() =>
  createStyles({
    background: {
      backgroundImage: `url(${papership})`,
      backgroundSize: 'cover',
      height: '100vh',
    },

    // 入力欄のCSS設定
    paper: {
      position: 'relative',
      marginLeft: 'auto',
      marginRight: 'auto',
      top: '33%',
      width: '45%',
    },
    inputbase: {
      width: '80%',
    },
  })
);

// useState hook:[保持値, 変数の値を変える関数] = useState(初期値);
// event.target.valueにて検索窓の入力値を取得。setKeywordでkeywordに格納

const TopMain: FC = () => {
  const classes = useStyle();
  const [keyword, setKeyword] = useState('');
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = () => {
    history.push('/search/' + keyword);
  };

  // onChange={handleChange} で検索がエンター確定の際にヒストリー確定
  return (
    <div className={classes.background}>
      <Paper className={classes.paper} component='form' onSubmit={handleSubmit}>
        <IconButton type='submit'>
          <SearchIcon />
        </IconButton>
        <InputBase
          className={classes.inputbase}
          placeholder='検索する写真素材名（例：猫）を入力してください。'
          onChange={handleChange}
        />
      </Paper>
    </div>
  );
};

export default TopMain;
