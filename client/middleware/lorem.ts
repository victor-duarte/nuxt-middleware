export default defineNuxtRouteMiddleware(({ path }, from) => {
  console.log({ path })
  if (path === '/lorem') {
    console.log('> Middleware: navigate to lorem')

    /** Prevent navigating to lorem */
    return navigateTo('/')
  }
})
