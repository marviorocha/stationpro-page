import React from 'react'

const Subscriber = () => {
    return (

        <div className="form-control">

            <form className="simple_form form form-vertical"
                id="new_subscriber" action="https://stationpro.ipzmarketing.com/f/0L1r3Dj8nfA"
                accept-charset="UTF-8" method="post">

                <div className="form-group email mb-3 required subscriber_email">

                    <input className="input w-3/4 input-bordered string email required"
                        required="required" aria-required="true" type="email"
                        placeholder="Please, enter your email here" name="subscriber[email]" id="subscriber_email" />
                </div>


                <div className="submit-wrapper">
                    <input type="submit" name="commit" value="Notify me!" className="btn btn-small w-3/4 btn-primary"
                        data-disable-with="Processing" />
                </div>
            </form>

        </div>

    )
}

export default Subscriber;