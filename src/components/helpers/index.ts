import {store} from '@store';
import {BookmarkRequest} from '@constants';
import {updateBookmark} from '@api-client';

export async function handleUpdateBookmark(id: string, isFavorite: boolean, isAuth: boolean, onFailure: () => void) {
  if (isAuth) {
    await store.dispatch(isFavorite
      ? updateBookmark({id: id, action: BookmarkRequest.Remove})
      : updateBookmark({id: id, action: BookmarkRequest.Add}));
  } else {
    onFailure();
  }
}
