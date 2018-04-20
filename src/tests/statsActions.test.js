import { resetSession, RESET_SESSION, populateStats, POPULATE_STATS, setError, SET_ERROR, closeModal, CLOSE_MODAL, populateLeaderboard, POPULATE_LEADERBOARD } from "../actions/stats";


describe('question actions', () => {
  it('should return the resetSession() action', () => {
    const action = resetSession()
    expect(action.type).toEqual(RESET_SESSION);
  })

  it('should return the populateStats() action', () => {
    const stats = 123;
    const action = populateStats(stats)
    expect(action.type).toEqual(POPULATE_STATS);
    expect(action.stats).toEqual(stats);
  })

  it('should return the setError() action', () => {
    const action = setError()
    expect(action.type).toEqual(SET_ERROR);
  })

  it('should return the closeModal() action', () => {
    const action = closeModal()
    expect(action.type).toEqual(CLOSE_MODAL);
  })

  it('should return the populateLeaderBoard() action', () => {
    const leaders = 'testboi';
    const action = populateLeaderboard(leaders)
    expect(action.type).toEqual(POPULATE_LEADERBOARD);
    expect(action.leadersArr).toEqual(leaders);
  })
})