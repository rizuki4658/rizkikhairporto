const validating = (key: string, value: any, rules: any) => {
  if (rules.required) {
    if (value === '') {
      return {
        message: rules.message ? rules.message : 'Please fill out this form!',
        property: key
      }
    } else if (rules.email) {
      const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
      if (!isEmail) {
        return {
          message: rules.message ? rules.message : 'Your email is not valid!',
          property: key
        }
      }
    } else if (rules.maxLength && value.length > rules.maxLength) {
      return {
        message: rules.message ? rules.message : `This field is olny accept ${rules.maxLength} characters!`,
        property: key
      }
    } else if (rules.minLength && value.length > rules.minLength) {
      return {
        message: rules.message ? rules.message : `This field must have at least ${rules.minLength} character!`,
        property: key
      }
    }
  }
  return null
}

export const useValidator = (rules: any, state: any) => {
  let formRules: any = {}
  let extractRules: any = {}
  for (let key in rules) {
    const instanceRules = () => ({
      path: key,
      errors: [],
      model: state[key],
      rule: rules[key],
      setErrors(arg: any) {
        // @ts-ignore
        this.errors = [{...arg}]
      },
      inValid() {
        return this.errors.length ? true : false
      },
      validate() {
        const result = validating(this.path, state, rules)
        this.setErrors({...result})
      },
      reset() {
        this.errors = []
        formRules._errors = [...formRules._errors].filter((item: any) => item.property !== this.path)
      }
    })
    extractRules[key] = instanceRules()
  }

  const instanceForm = () => ({
    _errors: [],
    setErrors(arg: any, key: string) {
      const prev = [...this._errors].find((item: any) => item.property === arg.property)
      if (!prev) {
        // @ts-ignore
        this._errors.push(arg)
        extractRules[key].errors = [{...arg}]
      }
    },
    validate() {
      Object.keys(rules).map((key: any) => {
        const result = validating(key, state[key], rules[key])
        this.setErrors({...result}, key)
      })
    },
    inValid() {
      return this._errors.length ? true : false
    },
    reset() {
      this._errors = []
    }
  })
  formRules = instanceForm()
  return { ...formRules, ...extractRules }
}
