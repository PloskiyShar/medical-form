<template>
    <form class="form" @submit.prevent="submit()">
        <h3>Атрибуты формы :</h3>
        <div class="container">
            <div class="input">
                <label for="surname">Фамилия*</label>
                <input type="text" id="surname" name="surname" v-model.trim="surname" @blur="$v.surname.$touch()">   
            </div>
            <div class="error" v-if="$v.surname.$error">
                <template v-if="!$v.surname.alpha">
                Фамилия должна содержать только кириллические буквы
                </template>
                <template v-else>
                Поле обязательно для заполнения
                </template>
            </div>
            <div class="input">
                <label for="name">Имя*</label>
                <input type="text" id="name" name="name" v-model.trim="name" @blur="$v.name.$touch()">
            </div>
            <div class="error" v-if="$v.name.$error">
                <template v-if="!$v.name.alpha">
                Имя должно содержать только кириллические буквы
                </template>
                <template v-else>
                Поле обязательно для заполнения
                </template>
            </div>
            <div class="input">
                <label for="patronymic">Отчество</label>
                <input type="text" id="patronymic" name="patronymic" v-model.trim="patronymic">
            </div>
            <div class="input">
                <label for="birthday">Дата рождения*</label>
                <input type="text" id="birthday" name="birthday" v-model="birthday" @blur="$v.birthday.$touch()">
            </div>
            <div class="error" v-if="$v.birthday.$error">
                    Введите дату в формате ДД.ММ.ГГГГ
            </div>
            <div class="input">
                <label for="phone">Номер телефона*</label>
                <input type="tel" id="phone" name="phone" v-model.number="phone" @blur="$v.phone.$touch()">
            </div>
            <div class="error" v-if="$v.phone.$error">
                Номер должен начинаться с 7 и содержать 11 цифр
            </div>
            <div class="radio">
                <label for="gender">Пол</label>
                <input type="radio" id="male" name="gender" value="Мужской" v-model="gender">
                <label for="male">Мужской</label>
                <input type="radio" id="female" name="gender" value="Женский" v-model="gender">
                <label for="female">Женский</label>
            </div>
            <div class="input">
                <label for="customerGroup">Группа клиентов*</label>
                <select id="customerGroup" name="customerGroup" multiple size="3" v-model="customerGroup" @blur="$v.customerGroup.$touch()">
                    <option>VIP</option> 
                    <option>Проблемные</option>
                    <option>ОМС</option>
                </select>
            </div>
            <div class="error" v-if="$v.customerGroup.$error">
                Выберите хотя бы одну группу
            </div>
            <div class="input">
                <label for="attendingDoctor">Лечащий врач</label>
                <select id="attendingDoctor" name="attendingDoctor" v-model="attendingDoctor">
                    <option>Иванов</option>
                    <option>Захаров</option>
                    <option>Чернышева</option>
                </select>
            </div>
            <div class="checkbox">
                <input type="checkbox" id="isSendMessages" name="isSendMessages" v-model="isSendMessages">
                <label for="isSendMessages">Не отправлять СМС</label> 
            </div>
        </div>
        
        <h3>Адрес :</h3>
        <div class="container">
            <div class="input">
                <label for="index">Индекс</label>
                <input type="text" id="index" name="index" v-model.number="index">
            </div>
            <div class="input">
                <label for="country">Страна</label>
                <input type="text" id="country" name="country" v-model.trim="country">
            </div>
            <div class="input">
                <label for="region">Область</label>
                <input type="text" id="region" name="region" v-model.trim="region">
            </div>
            <div class="input">
                <label for="city">Город*</label>
                <input type="text" id="city" name="city" v-model.trim="city" @blur="$v.city.$touch()">
            </div>
            <div class="error" v-if="$v.city.$error">
                <template v-if="!$v.city.alpha">
                Название должно содержать только кириллические буквы
                </template>
                <template v-else>
                Поле обязательно для заполнения
                </template>
            </div>
            <div class="input">
                <label for="street">Улица</label>
                <input type="text" id="street" name="street" v-model.trim="street">
            </div>
            <div class="input">
                <label for="house">Дом</label>
                <input type="text" id="house" name="house" v-model.number="house">
            </div>
        </div>
        
        <h3>Паспорт :</h3>
        <div class="container">
            <div class="input">
                <label for="documentType">Тип документа*</label>
                <select id="documentType" name="documentType" v-model="documentType" @blur="$v.documentType.$touch()">
                    <option>Паспорт</option>
                    <option>Свидетельство о рождении</option>
                    <option>Водительское удостоверение</option>
                </select>
            </div>
            <div class="input">
                <label for="passportSeries">Серия</label>
                <input type="number" id="passportSeries" name="passportSeries" v-model.number="passportSeries">
            </div>
            <div class="input">
                <label for="passportNumber">Номер</label>
                <input type="number" id="passportNumber" name="passportNumber" v-model.number="passportNumber">
            </div>
            <div class="input">
                <label for="whoIssued">Кем выдан</label>
                <input type="text" id="whoIssued" name="whoIssued" v-model.trim="whoIssued">
            </div>
            <div class="input">
                <label for="dateOfIssue">Дата выдачи*</label>
                <input type="text" id="dateOfIssue" name="dateOfIssue" v-model="dateOfIssue" @blur="$v.dateOfIssue.$touch()">
            </div>
            <div class="error" v-if="$v.dateOfIssue.$error">
                Введите дату в формате ДД.ММ.ГГГГ
            </div>
            <input type="submit" :disabled="$v.$invalid" value="Отправить">
            <div class="error" v-if="$v.$invalid">
                Заполните все обязательные* поля
            </div>
        </div>
        
    </form>
</template>

<script>
import { required, maxLength, minLength } from 'vuelidate/lib/validators';

export default {
  data() {   
    return {
        surname: null,
        name: null,
        patronymic: null,
        birthday: null,
        phone: null,
        gender: null,
        customerGroup: ['ОМС'],
        attendingDoctor: 'Иванов',
        isSendMessages: false,
        index: null,
        country: null,
        region: null,
        city: null,
        street: null,
        house: null,
        documentType: 'Паспорт',
        passportSeries: null,
        passportNumber: null,
        whoIssued: null,
        dateOfIssue: null
    };
  },
  methods: {
    submit() {
        console.log(this.$data)
        alert('Новый клиент создан');
        this.$v.$reset();
        console.log(this.$data)
    },
  },
  validations: {
    phone: {
      required,
      valid: val => /^7(\d){10}/.test(val),
    },
    surname: {
      required,
      alpha: val => /^[а-яё]*$/i.test(val),
    },
    name: {
      required,
      alpha: val => /^[а-яё]*$/i.test(val),
    },
    birthday: {
        required,
        birthday: val => /^[01-31]{2}\.[01-12]{2}?\.[1900-2020]{4}?$/.test(val),
    },
    customerGroup: {
        required,
    },
    city: {
        required,
        alpha: val => /^[а-яё]*$/i.test(val),
    },
    documentType: {
        required,
    },
    dateOfIssue: {
        required,
        date: val => /^[01-31]{2}\.[01-12]{2}?\.[1900-2020]{4}?$/.test(val),
    }
  },
};
</script>

<style lang="scss">
    .form {
        max-width: 500px;
        min-width: 300px;
        margin: 0 auto;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: stretch;
        
        background: $background;
        padding: 15px;
        font-family: Helvetica, Arial, sans-serif;
        border: solid 1px #333;

        input, select {
            display: flex;
            padding: .2em;
            margin-bottom: .6em;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 1.1em;
            border: solid 2px rgb(68, 65, 121);
            background-color: #fff;
        }

        .input {
            input, select {
               min-width: 270px; 
            }
            
        }

        .radio, .checkbox {
            display: flex;
        }

        input[type="submit"], select {
            cursor: pointer;
        }

        input[type="submit"] {
            font-family: Helvetica, Arial, sans-serif;
            text-transform: uppercase;
        }

        label {
            font-size: 1em;
            text-transform: uppercase;
        }

    }

    .error {
        color: $error;
    }
</style>template
