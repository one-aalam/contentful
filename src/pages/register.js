import Layout from '../components/layout'

export default () => (
  <Layout siteTitle={'Analytics Times -- Sign Up Today!'} description={'Sign Up today'}>
      <article className="vh-100 dt w-100 bg-dark-pink">
        <div className="dtc v-mid tc white ph3 ph4-l">
        <h1>Sign-up Today!</h1>
        <form action="sign-up_submit" method="get" accept-charset="utf-8">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" for="email-address">Email address</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address" />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" for="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password" />
            </div>
          </fieldset>
          <div class="mt3">
            <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up" />
          </div>
        </form>
        </div>
      </article>
  </Layout>
)