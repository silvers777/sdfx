import { Action } from 'redux'
import { ReduxState } from 'store/createRootReducer'
import { ThunkAction } from 'redux-thunk'

type CompleteMeta = {
  done: boolean
}

type Meta = CompleteMeta

declare global {
  type BaseFSA<TPayload extends any = undefined> = {
    type: string
    payload?: TPayload
    meta?: Meta
  }

  type InitiatorFSA<TPayload> = BaseFSA<TPayload> & {
    meta: { done: false }
  }

  type SuccessFSA<TPayload> = BaseFSA<TPayload> & {
    payload: TPayload
    meta: { done: true }
  }

  type ErrorFSA<TPayload> = BaseFSA<TPayload> & {
    payload: TPayload
    error: true
  }

  type FSA<
    TInitiatorPayload extends any = undefined,
    TSuccessPayload extends any = undefined,
    TErrorPayload extends any = undefined
  > = InitiatorFSA<TInitiatorPayload> | SuccessFSA<TSuccessPayload> | ErrorFSA<TErrorPayload>

  type MrxAction = Action | FSA

  type GraphQLResponse<Keys extends string, T> = {
    data: {
      data?: { [k in Keys]: T }
      errors?: [{ message: string }]
    }
  }

  type MrxThunk<ActionType extends Action<string>, ReturnType = void> = ThunkAction<
    ReturnType,
    ReduxState,
    null,
    ActionType
  >
}
