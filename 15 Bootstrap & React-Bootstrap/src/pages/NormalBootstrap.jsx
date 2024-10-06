import React from 'react'

const NormalBootstrap = () => {
  return (
    <div className='text-center'>
      <h1 className='text-danger'>Welcome to my home page</h1>
      <div className="square border border-5 border-black rounded-top-4 bg-primary d-flex justify-content-center" style={{ width: '100px', height: '100px' }}></div>
      <div>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
        
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NormalBootstrap