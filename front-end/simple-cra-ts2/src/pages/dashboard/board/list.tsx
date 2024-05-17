import {Helmet} from 'react-helmet-async';
import BoardListView from "../../../sections/board/view/board-list-view";
// sections

// ----------------------------------------------------------------------

export default function BoardListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: board List</title>
      </Helmet>

      {/* <Typography>Hello World!</Typography> */}
       <BoardListView pageName="공지사항 게시판" />
    </>
  );
}
