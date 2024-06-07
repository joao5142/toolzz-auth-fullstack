<?php

namespace App\Http\Requests\auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterUserRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => 'string|required|max:191',
            'email' => 'email|required|max:191|unique:users',
            'password' => 'string|required|max:191|min:8',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'O campo de nome é obrigatório!',
            'email.required' => 'O campo de email é obrigatório!',
            'password.required' => 'O campo de senha é obrigatório!',
            'email.unique:users' => 'Já existe um email como esse cadastrado !'
        ];
    }
}
