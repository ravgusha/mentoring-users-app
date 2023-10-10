import { Actions, createEffect, ofType } from "@ngrx/effects";
import { inject } from "@angular/core";
import { ApiService } from "@users/core/http";
import { catchError, map, of, switchMap } from "rxjs";
import { backlogAction } from "./backlog.action";
import { IBacklog } from "../model/backlog.model";

export const loadBacklogs$ = createEffect(() => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    return actions$.pipe(
      ofType(backlogAction.loadBacklog),
      switchMap(
        () => apiService.get<IBacklog[]>('/backlog')
          .pipe(
            map(
              (backlogs) => {
                return backlogAction.loadBacklogSuccess({ backlogs })
              }
            ),
            catchError((error) => {
              console.error('Error', error);
              return of(error)
              // return of(ArticlesActions.loadArticlesFailed({ error }))
            })
          )
      )
    )
  }, { functional: true }
)

export const deleteBacklog$ = createEffect(() => {
    const actions = inject(Actions);
    const apiService = inject(ApiService);

    return actions.pipe(
      ofType(backlogAction.deleteBacklog),
      switchMap(({ id }) => apiService.delete<void>(`/backlog/${id}`).pipe(
          map(() => backlogAction.deleteBacklogSuccess({ id })),
          catchError((error) => {
            console.log(error)
            return of(error)
          })
        )
      )
    )
  }, { functional: true }
)
